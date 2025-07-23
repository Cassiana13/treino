export const theme = {
  colors: {
    primary: "#ff4500", // Laranja-vermelho (como no login)
    secondary: "#ffa07a", // Laranja claro para contrastes
    darkBg: "#1c1c1c", // Fundo escuro
    cardBg: "#252525", // Fundo dos cards
    text: "#ffffff", // Texto branco
    textSecondary: "#888", // Texto secundário
    error: "#ff3333", // Vermelho para erros
    success: "#4CAF50", // Verde para sucesso
  },
  fonts: {
    main: "'Roboto', sans-serif",
    heading: "'Oswald', sans-serif", // Mantendo a fonte do login
  },
  effects: {
    shadow: "0 0 25px rgba(255, 0, 0, 0.3)",
    glow: "0 0 10px rgba(255, 69, 0, 0.4)",
  },
  breakpoints: {
    mobile: "576px", // Smartphones
    tablet: "768px", // Tablets
    desktop: "992px", // Desktops pequenos
    large: "1200px", // Desktops grandes
  },
};

export default theme;
