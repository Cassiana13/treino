import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Para você conseguir testar no localhost
      },
      manifest: {
        name: "Meu App de Treino",
        short_name: "TreinoApp",
        description: "Aplicativo para gestão de treinos e evolução",
        theme_color: "#000000",
        background_color: "#000000",
        display: "standalone",
        start_url: "/",
        id: "/",
        icons: [
          {
            src: "/logo192.png",
            sizes: "192x192", // Ajustado para o tamanho real da imagem
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/logo512.png",
            sizes: "512x512", // Ajustado para o tamanho real da imagem
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    include: ["styled-components"],
  },
});
