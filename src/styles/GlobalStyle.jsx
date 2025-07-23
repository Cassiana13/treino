import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: url('/gym-bg.jpg') no-repeat center center fixed;
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.darkBg};
    line-height: 1.6;

     @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 10px;
    }
  }

  /* Estilos para formulários */
  .form-container {
    width: 100%;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);

     @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 1rem;
      max-width: 100%;
    }
  }

  .form-title {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  .input-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.8);
    transition: border 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }
button {
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

input, select, textarea {
  font-family: ${({ theme }) => theme.fonts.main};
  transition: all 0.3s ease;
}
  .form-footer {
    text-align: center;
    margin-top: 1.5rem;
    color: #666;
  }

  .form-link {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      text-decoration: underline;
    }
  }
      h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  button {
    transition: all 0.3s ease;
    cursor: pointer;
  }
 input, textarea, select {
    background: #111;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid #444;
    border-radius: 6px;
    padding: 12px;
    font-family: inherit;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
      box-shadow: ${({ theme }) => theme.effects.glow};
    }
  }


  /* Restante dos seus estilos globais... */
`;

export default GlobalStyles;
