import type { Metadata } from 'next'
import React from 'react'
import AccountProvider from "@/app/components/Profile/AccountProvider"

const metadata: Metadata = {
  title: "Desafio Técnico Frontend - Magazord",
  description: "Teste técnico para a vaga de Front-end na Magazord, desenvolvido por RuanDevJs.",
  keywords: ["react", "nextjs", "nodejs", "github", "frontend"]
}

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <AccountProvider>
      {children}
    </AccountProvider>
  )
}
