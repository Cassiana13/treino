import { useState, useEffect, useRef } from "react";
import { logout } from "./services/authService.js";
import { useNavigate } from "react-router-dom";
import {
  fetchWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout,
} from "./services/treinosService";
import TreinoForm from "./componentes/TreinoForm";
import TreinoItem from "./componentes/TreinoItem";
import { auth } from "./firebase/firebase.js";
import {
  HomeContainer,
  Header,
  Title,
  WeekGrid,
  DayCard,
  DayTitle,
  TreinoList,
  EmptyMessage,
  LoadingMessage,
  LogoutButton,
  ConfirmOverlay,
  ConfirmBox,
  ConfirmTitle,
  ConfirmActions,
  ConfirmCancel,
  ConfirmDelete,
  ErrorToast,
} from "./styles/Home.styles.jsx";

// Todos os dias da semana incluindo fim de semana
const DIAS_SEMANA = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

function Home({ onLogout }) {
  const navigate = useNavigate();
  const [treinos, setTreinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [treinoEdit, setTreinoEdit] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null); // { id, nome }
  const [expandedDays, setExpandedDays] = useState(
    Object.fromEntries(DIAS_SEMANA.map((d) => [d, false])),
  );
  const formRef = useRef(null);

  // Exibe erro por 4 segundos
  const showError = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => setErrorMsg(""), 4000);
  };

  const toggleDay = (dia) => {
    setExpandedDays((prev) => ({ ...prev, [dia]: !prev[dia] }));
  };

  const editTreino = (treino) => {
    setTreinoEdit(treino);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  useEffect(() => {
    const carregarTreinos = async () => {
      try {
        const dados = await fetchWorkouts();
        setTreinos(dados || []);
      } catch (error) {
        console.error("Erro ao buscar treinos:", error);
        showError("Não foi possível carregar os treinos. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };
    carregarTreinos();
  }, []);

  const addTreino = async (treino) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Usuário não autenticado");

      if (treinoEdit) {
        await updateWorkout(treinoEdit.id, treino);
        setTreinos((prev) =>
          prev.map((t) => (t.id === treinoEdit.id ? { ...t, ...treino } : t)),
        );
      } else {
        const novoTreino = await addWorkout(user.uid, treino);
        setTreinos((prev) => [...prev, novoTreino]);
      }
      setTreinoEdit(null);
    } catch (error) {
      console.error("Erro ao salvar treino:", error);
      showError("Erro ao salvar o treino. Tente novamente.");
    }
  };

  // Abre modal de confirmação
  const solicitarDelete = (id, nome) => {
    setConfirmDelete({ id, nome });
  };

  // Executado após confirmação no modal
  const confirmarDelete = async () => {
    if (!confirmDelete) return;
    const { id } = confirmDelete;
    setConfirmDelete(null);
    setDeletingId(id);
    try {
      await deleteWorkout(id);
      setTreinos((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Erro ao remover treino:", error);
      showError("Erro ao remover o treino. Tente novamente.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      onLogout();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      showError("Erro ao sair. Tente novamente.");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <HomeContainer>
      {/* Toast de erro */}
      {errorMsg && <ErrorToast>{errorMsg}</ErrorToast>}

      {/* Modal de confirmação de delete */}
      {confirmDelete && (
        <ConfirmOverlay>
          <ConfirmBox>
            <ConfirmTitle>Remover treino?</ConfirmTitle>
            <p>
              Tem certeza que deseja remover{" "}
              <strong>{confirmDelete.nome}</strong>? Essa ação não pode ser
              desfeita.
            </p>
            <ConfirmActions>
              <ConfirmCancel onClick={() => setConfirmDelete(null)}>
                Cancelar
              </ConfirmCancel>
              <ConfirmDelete onClick={confirmarDelete}>Remover</ConfirmDelete>
            </ConfirmActions>
          </ConfirmBox>
        </ConfirmOverlay>
      )}

      <Header>
        <Title>Meus Treinos</Title>
        <LogoutButton
          onClick={handleLogout}
          disabled={isLoggingOut}
          aria-label={isLoggingOut ? "Saindo..." : "Sair da conta"}
          title={isLoggingOut ? "Saindo..." : "Sair"}
        >
          <span className="material-icons">
            {isLoggingOut ? "hourglass_empty" : "logout"}
          </span>
          <span className="logout-label">
            {isLoggingOut ? "Saindo..." : "Sair"}
          </span>
        </LogoutButton>
      </Header>

      <div ref={formRef} style={{ margin: "1rem 0" }}>
        <TreinoForm
          onSubmit={addTreino}
          treinoEdit={treinoEdit}
          setTreinoEdit={setTreinoEdit}
        />
      </div>

      {loading ? (
        <LoadingMessage>
          <span className="material-icons spin">autorenew</span>
          <p>Carregando seus treinos...</p>
        </LoadingMessage>
      ) : (
        <WeekGrid>
          {DIAS_SEMANA.map((dia) => {
            const treinosDoDia = treinos.filter((t) => t.dia === dia);
            return (
              <DayCard key={dia}>
                <DayTitle
                  onClick={() => toggleDay(dia)}
                  expanded={expandedDays[dia]}
                >
                  {dia}
                </DayTitle>
                {expandedDays[dia] && (
                  <TreinoList>
                    {treinosDoDia.length > 0 ? (
                      treinosDoDia.map((treino) => (
                        <TreinoItem
                          key={treino.id}
                          treino={treino}
                          onEdit={editTreino}
                          onDelete={(id) => solicitarDelete(id, treino.nome)}
                          isDeleting={deletingId === treino.id}
                        />
                      ))
                    ) : (
                      <EmptyMessage>
                        <span>Nenhum treino</span>
                        <small>Adicione pelo formulário acima</small>
                      </EmptyMessage>
                    )}
                  </TreinoList>
                )}
              </DayCard>
            );
          })}
        </WeekGrid>
      )}
    </HomeContainer>
  );
}

export default Home;
