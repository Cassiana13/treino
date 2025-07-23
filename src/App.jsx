import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home"; // Vamos criar a Home como página inicial com os treinos
import Cadastro from "./componentes/Cadastro";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { onUserStateChanged } from "./services/authService";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true); // Para gerenciar o estado de carregamento
  function handleLogin(usuarioLogado) {
    setUsuario(usuarioLogado); // Define o usuário logado
  }
  useEffect(() => {
    const unsubscribe = onUserStateChanged((user) => {
      setUsuario(user);
      setCarregando(false); // Quando o monitoramento terminar, atualiza o estado de carregamento
    });

    // Limpar o monitoramento quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  if (carregando) {
    return <div>Carregando...</div>; // Enquanto carrega, você pode mostrar uma mensagem
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div style={{ padding: "20px" }}>
          <Routes>
            {/* Rota de login */}
            <Route
              path="/"
              element={
                usuario ? (
                  <Home onLogout={() => setUsuario(null)} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            {/* Caso o usuário já esteja logado, o componente Home será renderizado */}
            <Route
              path="/home"
              element={
                usuario ? (
                  <Home onLogout={() => setUsuario(null)} />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route path="/cadastro" element={<Cadastro />} />{" "}
            {/* Rota para o Cadastro */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
