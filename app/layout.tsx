import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api"

import { Roboto } from "next/font/google";
import "./globals.css";

const fontRoboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Desafio Técnico Frontend - Magazord",
  description: "Teste técnico para a vaga de Front-end na Magazord, desenvolvido por RuanDevJs.",
  keywords: ["react", "nextjs", "nodejs", "github", "frontend"]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontRoboto.className} antialiased`}>
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
