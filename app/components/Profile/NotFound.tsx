import { SmileySad } from "phosphor-react";

interface IProps {
  type: "filters" | "profile"
}

const MESSAGE = {
  filters: "Não encontramos repositórios com o filtro aplicado!",
  profile: "Perfil não encontrado :("
}

export default function NotFound({ type = "filters" }: IProps) {
  return (
    <div className="flex flex-col items-center gap-1 mt-5">
      <SmileySad size={50} color="#111" />
      <p className="text-zinc-700 font-medium">
        {MESSAGE[type]}
      </p>
    </div>
  )
}
