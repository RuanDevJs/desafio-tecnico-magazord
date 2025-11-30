import { UserSwitch } from 'phosphor-react'

export default function LoadingProfile() {
  return (
    <div className='loading h-dvh flex flex-col justify-center items-center space-y-2'>
      <UserSwitch size={50} color="#24292E" />
      <p className='text-lg text-zinc-500'>Carregando seus dados do Github...</p>
    </div>
  )
}
