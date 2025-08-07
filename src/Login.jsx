import { useState } from "react";
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
  
} from "./styles/Login.styles";
import { auth, googleProvider, signInWithPopup } from "./firebase/firebase";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      // Login bem-sucedido
      console.log("Usuário logado:", result.user);
      navigate("/"); // Redireciona para a página home
    } catch (error) {
      console.error("Erro no login com Google:", error);
      alert(`Erro no login: ${error.message}`);
    }
  };

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const usuario = await login(email, senha);
      if (usuario) {
        onLogin(usuario);
        navigate("/home");
      }
    } catch {
      setErro("Erro ao fazer login. Tente novamente.");
    }
  }

  function goToCadastro() {
    navigate("/cadastro");
  }

  return (
    <PageWrapper>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Container>
          <Title>Entrar no Treino</Title>
          {erro && <ErrorMessage>{erro}</ErrorMessage>}
          <Form onSubmit={handleLogin}>
            <InputWrapper>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder=" " // <-- esse espaço vazio ativa o :placeholder-shown
                id="email"
              />
              <Label htmlFor="email">Email</Label>
            </InputWrapper>

            <InputWrapper>
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                placeholder=" "
                id="senha"
              />
              <Label htmlFor="senha">Senha</Label>
            </InputWrapper>

            <Button type="submit">Entrar</Button>

            <GoogleContainer>
              <p>Ou entre com:</p>
              <GoogleButton type="button" onClick={handleGoogleSignIn}>
              
          

                Continuar com Google
              </GoogleButton>
            </GoogleContainer>
          </Form>
          <LinkButton onClick={goToCadastro}>
            Não tem conta? Cadastre-se
          </LinkButton>
        </Container>
      </motion.div>
    </PageWrapper>
  );
}

export default Login;
