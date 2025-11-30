"use client"

import { useRouter } from "next/navigation";
import { GithubLogo } from "phosphor-react"
import { FormEvent, useState } from "react"

export default function Home() {
  const [inputUsername, setInputUsername] = useState<string>();
  const router = useRouter();

  function handleNavigate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputUsername && inputUsername.length) {
      return router.push(`/profile/${inputUsername}?tab=repositories`);
    }
  }

  return (
    <main className='p-3.5 h-dvh mt-10'>
      <div className="h-full flex flex-col items-center ">
        <div>
          <GithubLogo size={50} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-center text-zinc-800">Sign in to GitHub</h1>
          <form className="w-[320px] mt-3.5" onSubmit={handleNavigate}>
            <div>
              <label className="block text-sm font-medium text-zinc-800 mt-2">Username or email address</label>
              <input onChange={event => setInputUsername(event.target.value)} type="text" className="block w-full text-sm font-normal text-zinc-700 px-2 border border-zinc-300 rounded py-2 outline-none" />
            </div>
            <button className="bg-[#1F883D] text-white w-full rounded p-1.5 outline-none mt-3.5 cursor-pointer">
              Logar
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
