import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Cadastro from "./componentes/Cadastro";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { onUserStateChanged } from "./services/authService";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const LoadingScreen = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.darkBg};
  gap: 1.5rem;

  .spinner {
    width: 48px;
    height: 48px;
    border: 3px solid ${({ theme }) => theme.colors.primary}30;
    border-top-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 0.9rem;
  }
`;

const NotFound = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.darkBg};
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text};

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 5rem;
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function App() {
  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  function handleLogin(usuarioLogado) {
    setUsuario(usuarioLogado);
  }

  useEffect(() => {
    const unsubscribe = onUserStateChanged((user) => {
      setUsuario(user);
      setCarregando(false);
    });
    return () => unsubscribe();
  }, []);

  if (carregando) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LoadingScreen>
          <div className="spinner" />
          <p>Carregando...</p>
        </LoadingScreen>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* Rota principal  */}
          <Route
            path="/"
            element={
              usuario ? (
                <Navigate to="/home" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          {/* Home protegida */}
          <Route
            path="/home"
            element={
              usuario ? (
                <Home onLogout={() => setUsuario(null)} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Cadastro */}
          <Route path="/cadastro" element={<Cadastro />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <NotFound>
                <h1>404</h1>
                <p>Página não encontrada.</p>
                <a href="/">Voltar para o início</a>
              </NotFound>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
