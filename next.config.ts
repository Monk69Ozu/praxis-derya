import type { NextConfig } from "next";

/* GITHUB_PAGES=1 → statischer Export für die Kunden-Vorschau unter /praxis-derya (GitHub Pages).
   Ohne die Variable bleibt alles wie gehabt (Dev-Server, normales Deployment). */
const fuerPages = process.env.GITHUB_PAGES === "1";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  ...(fuerPages && {
    output: "export" as const,
    basePath: "/praxis-derya",
    images: {
      loader: "custom" as const,
      loaderFile: "./lib/pages-bild-loader.ts",
    },
  }),
};

export default nextConfig;
