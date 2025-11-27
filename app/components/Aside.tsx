"use client"

import Image from "next/image"
import ProfilePicture from "@/assets/picture.png"
import { Buildings, InstagramLogo, Link, MapPin } from "phosphor-react"

export default function Aside() {
  return (
    <aside>
      <div id="profile-picture">
        <a href="https://github.com/RuanDevJs" className="flex justify-center">
          <Image src={ProfilePicture} className="w-64 h-64 object-cover rounded-full" draggable={false} alt="" />
        </a>
        <div className="mt-7">
          <h1 className="text-2xl font-semibold text-center text-zinc-900">Ruan Vitor - Front-End Developer</h1>
          <p className="text-lg font-normal text-center text-zinc-500">ᴘᴀꜱꜱɪᴏɴᴀᴛᴇ ᴀʙᴏᴜᴛ ᴄʜᴀɴɢɪɴɢ ᴛʜᴇ ᴡᴏʀʟᴅ ᴡɪᴛʜ ᴛᴇᴄʜɴᴏʟᴏɢʏ 🚀</p>
        </div>
        <div className="mt-3">
          <ul className="flex flex-col gap-3 ml-6">
            <li>
              <a href="https://www.linkedin.com/in/ruanvitorelpidio" className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                <Buildings size={23} weight="light" />
                Magazord - plataforma
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ruanvitorelpidio" className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                <MapPin size={23} weight="light" />
                Belo Horizonte, Minas Gerais
              </a>
            </li>
            <li>
              <a href="https://ruandevjs.github.io/portfolio/" className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                <Link size={23} weight="light" />
                Portfólio
              </a>
            </li>
            <li>
              <a href="https://ruandevjs.github.io/portfolio/" className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                <InstagramLogo size={23} weight="light" />
                RuanDevJs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
