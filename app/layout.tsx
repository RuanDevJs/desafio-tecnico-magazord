import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api"

import { Roboto } from "next/font/google";
import "./globals.css";
import QueryProvider from "./components/QueryProvider";
import Header from "./components/Header";

const fontRoboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafio Ténico Frontend | Magazord",
  description: "Teste técnico para a vaga de Front-end na Magazord, desenvolvido por RuanDevJs.",
  keywords: ["react", "nextjs", "nodejs", "github", "frontend", "github", "github-api"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontRoboto.className} antialiased`}>
        <QueryProvider>
          <PrimeReactProvider>
            <Header />
            {children}
          </PrimeReactProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
