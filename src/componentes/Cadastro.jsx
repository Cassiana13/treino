// src/Cadastro.js
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../services/authService";
import styled from "styled-components";

// Componentes estilizados
const Container = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 2rem auto;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.effects.shadow};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem;
    margin: 1rem;
    max-width: 100%;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Input = styled.input`
  padding: 14px 12px;
  border: 1px solid #444;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.darkBg};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: ${({ theme }) => theme.effects.glow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 16px 12px;
  }
`;

const Button = styled.button`
  padding: 14px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.secondary} 100%
  );
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  text-transform: uppercase;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 69, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  margin-bottom: 1rem;
`;

const LoginLink = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function handleCadastro(e) {
    e.preventDefault();
    try {
      await register(email, senha);
      navigate("/");
    } catch (error) {
      setErro(error.message || "Erro ao criar conta. Tente novamente.");
    }
  }

  return (
    <Container>
      <Title>Criar Conta</Title>

      {erro && <ErrorMessage>{erro}</ErrorMessage>}

      <Form onSubmit={handleCadastro}>
        <InputGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="seu@email.com"
          />
        </InputGroup>

        <InputGroup>
          <Label>Senha</Label>
          <Input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="Mínimo 6 caracteres"
            minLength="6"
          />
        </InputGroup>

        <Button type="submit">Cadastrar</Button>
      </Form>

      <LoginLink to="/">Já tem uma conta? Faça login</LoginLink>
    </Container>
  );
}

export default Cadastro;
