"use client"

import { Buildings, InstagramLogo, LinkSimple, MapPin } from "phosphor-react"
import useAccount from "../store/useAccount"
import { useState } from "react";

export default function Aside() {
  const account = useAccount(store => store.state.account);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <aside>
      <div id="profile-picture">
        <a href={account?.html_url} className="flex justify-center" id="profile-picture">
          <img src={account?.avatar_url} className="md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-full" draggable={false} alt="" />
        </a>
        <div className="mt-7">
          <h1 className="md:text-lg lg:text-2xl font-semibold text-center text-zinc-900">{account?.name}</h1>
          <p className="md:text-sm lg:text-lg font-normal text-center text-zinc-500">{account?.bio}</p>
        </div>
        <div className="mt-3">
          <ul className="flex md:ml-5 flex-col gap-3 ml-6" id="profile-information-web">
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
                <LinkSimple size={23} weight="light" />
                Portfolio
              </a>
            </li>)}
            <li>
              <a href="#" className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                <InstagramLogo size={23} weight="light" />
                {account?.login}
              </a>
            </li>
          </ul>
          <div className="my-3.5">
            <p className="text-base text-[#0587FF] font-normal text-center mb-3.5" onClick={() => setShowAccount(oldValue => !oldValue)}>Informações Adicionais</p>
            {showAccount ? <ul className="flex md:ml-5 flex-col gap-3 bg-[#f2f2f2] w-[320px] m-auto p-3.5 rounded-lg">
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
                  <LinkSimple size={23} weight="light" />
                  Portfolio
                </a>
              </li>)}
              <li>
                <a href="#" className="text-sm font-normal flex items-center gap-2.5 text-blue-500">
                  <InstagramLogo size={23} weight="light" />
                  {account?.login}
                </a>
              </li>
            </ul> : null}
          </div>
        </div>
      </div>
    </aside>
  )
}
