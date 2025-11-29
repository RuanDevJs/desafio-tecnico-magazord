"use client"

import { GithubLogo } from "phosphor-react"

export default function LoadingRepository() {
  return (
    <div id="spinner" className="flex flex-col items-center space-y-3.5 mt-10">
      <GithubLogo size={72} color="#24292E" />
      <p className="text-zinc-500 text-xl">Estamos carregando seus projetos...</p>
    </div>
  )
}
