import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio estático: `npm run build` genera la carpeta `out/`, lista para subir a public_html.
  output: "export",
  // Sin servidor no hay optimizador de imágenes: las fotos ya están en WebP y con peso acotado.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
