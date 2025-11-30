"use client"

import { GithubLogo } from "phosphor-react"

export default function Home() {
  return (
    <main className='p-3.5 h-dvh mt-10'>
      <div className="h-full flex flex-col items-center ">
        <div>
          <GithubLogo size={50} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-center text-zinc-800">Sign in to GitHub</h1>
          <form className="w-[320px] mt-3.5">
            <div>
              <label className="block text-sm font-medium text-zinc-800">Username or email address</label>
              <input type="text" className="w-full border border-zinc-300 rounded p-1.5 outline-none" />
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
