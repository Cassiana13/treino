// src/Cadastro.js
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook de navegação
import { register } from "../services/authService"; // Função de cadastro que vamos criar

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  async function handleCadastro(e) {
    e.preventDefault();
    try {
      await register(email, senha);
      navigate("/"); // Redireciona para a tela de login após cadastro
    } catch {
      setErro("Erro ao criar conta. Tente novamente.");
    }
  }

  return (
    <div style={styles.container}>
      <h2>Cadastrar</h2>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
      <form onSubmit={handleCadastro}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Cadastro;
