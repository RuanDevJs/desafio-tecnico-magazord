import { SmileySad } from "phosphor-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-1 mt-5">
      <SmileySad size={50} color="#111" />
      <p className="text-zinc-700 font-medium">Não encontramos repositórios com o filtro aplicado!</p>
    </div>
  )
}
