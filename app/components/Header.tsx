"use client"

import Image from "next/image"
import GithubLogo from "@/assets/github-logo.svg"

export default function Header() {
  return (
    <header className="bg-[#24292E] py-7">
      <div className="w-4/5 m-auto flex items-center gap-5">
        <a href="https://github.com/RuanDevJs" className="flex items-center gap-5 after:w-0.5 after:h-8 after:bg-white after:block after:rotate-12">
          <Image src={GithubLogo} width={150} alt="github-logo" />
        </a>
        <p className="text-base text-zinc-300 mt-1.5">Profile</p>
      </div>
    </header>
  )
}
