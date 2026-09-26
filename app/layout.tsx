import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniela Leão da Silva | Engenheira de Software Full Stack",
  description:
    "Portfólio profissional de Daniela Leão da Silva — Engenharia de Software Full Stack, PHP/Laravel, Python, Cloud, DevOps, Infraestrutura e Saúde Digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
