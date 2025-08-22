import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
   

  }

   html, body, #root {
    height: 100%;
    Width: 100%;
   
    overflow-x: hidden;
   
  }

  body {

    background-size: cover;
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.darkBg};
    line-height: 1.6;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
   
      background-attachment: scroll;
    }
  }

  .form-container {
    width: 100%;
    max-width: 400px;
    background: rgba(30, 41, 59, 0.85); /* Titanium translúcido */
    padding: 2rem;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.effects.shadow};
    margin: 0 auto;
    backdrop-filter: blur(6px);

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 1.5rem;
      max-width: 100%;
      border-radius: 8px;
      backdrop-filter: none;
      background: rgba(30, 41, 59, 0.95);
    }
  }

  .form-title {
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
    font-size: 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }

  .input-group {
    margin-bottom: 1.2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      margin-bottom: 1rem;
    }
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.95rem;
  }

  input, select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: 6px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.08);
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.3s ease;
    appearance: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 14px;
      font-size: 0.95rem;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
      outline: none;
      box-shadow: ${({ theme }) => theme.effects.glow};
    }
  }

  button, .submit-btn {
    width: 100%;
    padding: 14px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    min-height: 48px;
    box-shadow: ${({ theme }) => theme.effects.shadow};

    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.effects.glow};
    }

    &:active {
      transform: translateY(0);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 16px;
      font-size: 1.05rem;
    }
  }

  .form-link {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    padding: 4px 0;
    display: inline-block;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.95rem;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      letter-spacing: 0.5px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      width: 4px;
    }
    
    body {
      -webkit-overflow-scrolling: touch;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    input, select, textarea {
      font-size: 16px !important;
    }
  }
`;

export default GlobalStyles;
