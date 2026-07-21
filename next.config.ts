import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Gera arquivos estáticos para GitHub Pages
  output: "export",

  // Necessário para GitHub Pages
  basePath: isProd ? "/daniela-portfolio" : "",
  assetPrefix: isProd ? "/daniela-portfolio/" : "",

  // Desabilita otimização de imagens
  images: {
    unoptimized: true,
  },

  // Evita barra no final das URLs
  trailingSlash: false,

  // Configuração do Turbopack
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;