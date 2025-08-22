import { useState, useEffect } from "react";
import { logout } from "./services/authService.js";
import { useNavigate } from "react-router-dom";
import {
  fetchWorkouts,
  addWorkout,
  updateWorkout,
  deleteWorkout,
} from "./services/treinosService";
import { useRef } from "react";
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
  FormFloatingWrapper,
} from "./styles/Home.styles.jsx";

function Home({ onLogout }) {
  const navigate = useNavigate();
  const [treinos, setTreinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [treinoEdit, setTreinoEdit] = useState(null);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  const [expandedDays, setExpandedDays] = useState({
    Segunda: false,
    Terça: false,
    Quarta: false,
    Quinta: false,
    Sexta: false,
  });

  const toggleDay = (dia) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dia]: !prev[dia],
    }));
  };
  const formRef = useRef(null);
  const editTreino = (treino) => {
    setTreinoEdit(treino);
    setTimeout(() => {
      // Rola a página até o formulário
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });

    }, 100)
  };
  useEffect(() => {
    const carregarTreinos = async () => {
      try {
        const dados = await fetchWorkouts();
        setTreinos(dados || []);
      } catch (error) {
        console.error("Erro ao buscar treinos:", error);
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
        setTreinos(
          treinos.map((t) => (t.id === treinoEdit.id ? { ...t, ...treino } : t))
        );
      } else {
        const docRef = await addWorkout(user.uid, treino);
        const novoTreino = { id: docRef.id, ...treino };
        setTreinos([...treinos, novoTreino]);
      }

      setTreinoEdit(null);
    } catch (error) {
      console.error("Erro ao salvar treino:", error);
    }
  };

  const deleteTreino = async (id) => {
     if (!window.confirm("Tem certeza que deseja excluir este treino?")) {
    return;
  }
    try {
      await deleteWorkout(id);
      setTreinos(treinos.filter((treino) => treino.id !== id));
    } catch (error) {
      console.error("Erro ao remover treino:", error);
    } finally {
      setDeletingId(null)
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logout();
      onLogout();
      navigate("/", { replace: true });
      setTreinos([]);
      setTreinoEdit(null);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <HomeContainer>
      <Header>
        <Title>Meus Treinos</Title>
        <LogoutButton onClick={handleLogout} disabled={isLoggingOut}>
         
          {isLoggingOut ? "Saindo..." : ""}
          
 <span className="material-icons">
    {isLoggingOut ? "hourglass_empty" : "logout"}
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
          {diasSemana.map((dia) => {
            const treinosDoDia = treinos.filter((treino) => treino.dia === dia);

            return (
              <DayCard key={dia}>
                <DayTitle
                  onClick={() => toggleDay(dia)}
                  style={{ cursor: "pointer" }}
                >
                  {dia} {expandedDays[dia] ? "−" : "+"}
                </DayTitle>
                {expandedDays[dia] && (
                  <TreinoList>
                    {treinosDoDia.length > 0 ? (
                      treinosDoDia.map((treino) => (
                        <TreinoItem
                          key={treino.id}
                          treino={treino}
                          onEdit={editTreino}
                          onDelete={deleteTreino}
                          isDeleting={deletingId === treino.id}
                        />
                      ))
                    ) : (
                      <EmptyMessage>Nenhum treino cadastrado
                        <small>Clique no formulário acima para adicionar</small>
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
