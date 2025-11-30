"use client"

import { Buildings, InstagramLogo, Link, MapPin } from "phosphor-react"
import useAccount from "../store/useAccount"

export default function Aside() {
  const account = useAccount(store => store.state.account);

  return (
    <aside>
      <div id="profile-picture">
        <a href={account?.html_url} className="flex justify-center">
          <img src={account?.avatar_url} className="w-64 h-64 object-cover rounded-full" draggable={false} alt="" />
        </a>
        <div className="mt-7">
          <h1 className="text-2xl font-semibold text-center text-zinc-900">{account?.name}</h1>
          <p className="text-lg font-normal text-center text-zinc-500">{account?.bio}</p>
        </div>
        <div className="mt-3">
          <ul className="flex flex-col gap-3 ml-6">
            <li>
              <a href="#" className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                <Buildings size={23} weight="light" />
                Magazord - plataforma
              </a>
            </li>
            {account?.location && (<li>
              <a href="#" className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                <MapPin size={23} weight="light" />
                {account?.location}
              </a>
            </li>)}
            {account?.blog && (<li>
              <a href={account?.blog} className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                <Link size={23} weight="light" />
                {account?.blog}
              </a>
            </li>)}
            <li>
              <a href="#" className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                <InstagramLogo size={23} weight="light" />
                {account?.login}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
