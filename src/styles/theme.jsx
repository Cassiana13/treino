export const theme = {
  colors: {
    primary: "#F97316", // Laranja Energy - Botões e CTA
    accent: "#EA580C", // Laranja mais escuro (hover)
    secondary: "#CBD5E1", // Cinza Prata Claro - Detalhes secundários
    darkBg: "#0F172A", // Fundo principal (Azul Petróleo Escuro)
    cardBg: "#1E293B", // Fundo dos cards (Titanium)
    text: "#F1F5F9", // Texto principal (Branco Gelo)
    textSecondary: "#CBD5E1", // Texto secundário
    error: "#EF4444", // Vermelho para erros
    success: "#22C55E", // Verde limão para sucesso
  },
  fonts: {
    main: "'Roboto', sans-serif",
    heading: "'Oswald', sans-serif",
  },
  effects: {
    shadow: "0 0 25px rgba(249, 115, 22, 0.3)", // Sombra laranja suave
    glow: "0 0 10px rgba(249, 115, 22, 0.4)", // Glow laranja nos destaques
  },
  breakpoints: {
    smallMobile: "400px",
    mobile: "576px",
    tablet: "768px",
    desktop: "900px",
    large: "1200px",
  },
};

export default theme;
