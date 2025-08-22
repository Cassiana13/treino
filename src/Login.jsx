import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { login } from "./services/authService";
import {
  PageWrapper,
  Container,
  Title,
  Form,
  Input,
  Button,
  LinkButton,
  ErrorMessage,
  InputWrapper,
  Label,
  GoogleContainer,
  GoogleButton,
  LoadingSpinner,
} from "./styles/Login.styles";
import { GoogleOutlined } from "@ant-design/icons";
import { auth, googleProvider, signInWithPopup } from "./firebase/firebase";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    if (erro) {
      const timer = setTimeout(() => setErro(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [erro]);

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      setErro("");
      const result = await signInWithPopup(auth, googleProvider);
      onLogin(result.user);
      navigate("/home");
    } catch (error) {
      console.error("Erro no login com Google:", error);
      setErro(error.message || "Erro ao fazer login com Google.");
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErro("Por favor, insira um email válido.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);
      setErro("");
      const usuario = await login(email, senha);
      if (usuario) {
        onLogin(usuario);
        navigate("/home");
      }
    } catch (error) {
      setErro(error.message || "Erro ao fazer login. Verifique suas credenciais.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (erro) setErro("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleLogin(e);
    }
  };

  const goToCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Container>
          <Title>Entrar no Treino</Title>

          {erro && <ErrorMessage>⚠️ {erro}</ErrorMessage>}

          <Form onSubmit={handleLogin}>
            <InputWrapper>
              <Input
                type="email"
                value={email}
                onChange={handleInputChange(setEmail)}
                onKeyPress={handleKeyPress}
                required
                placeholder=" "
                id="email"
                disabled={loading || googleLoading}
              />
              <Label htmlFor="email">Email</Label>
            </InputWrapper>

            <InputWrapper>
              <Input
                type="password"
                value={senha}
                onChange={handleInputChange(setSenha)}
                onKeyPress={handleKeyPress}
                required
                placeholder=" "
                id="senha"
                disabled={loading || googleLoading}
                minLength={6}
              />
              <Label htmlFor="senha">Senha</Label>
            </InputWrapper>

            <Button type="submit" disabled={loading || googleLoading}>
              {loading ? (
                <>
                  <LoadingSpinner />
                  Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </Button>

            <GoogleContainer>
              <p>Ou entre com:</p>
              <GoogleButton
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading || googleLoading}
              >
                {googleLoading ? (
                  <LoadingSpinner />
                ) : (
                  <GoogleOutlined style={{ fontSize: "20px", marginRight: "10px" }} />
                )}
                {googleLoading ? "Conectando..." : "Continuar com Google"}
              </GoogleButton>
            </GoogleContainer>
          </Form>

          <LinkButton onClick={goToCadastro} disabled={loading || googleLoading}>
            Não tem conta? Cadastre-se
          </LinkButton>
        </Container>
      </motion.div>
    </PageWrapper>
  );
}

export default Login;
