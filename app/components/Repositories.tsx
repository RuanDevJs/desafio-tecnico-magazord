"use client";

import { useQuery } from "@tanstack/react-query";
import useAccount from "../store/useAccount";

import API from "../services/api";
import { IRepositories } from "../types/accounts";

import LoadingRepository from "./Loading";
import { useSearchParams } from "next/navigation";
import { SmileySad } from "phosphor-react";

async function fetchRepositories(user: string, type?: string) {
  const QUERY_PARAMS = `?per_page=10&page=1&sort=created`
  if (type !== undefined) {
    QUERY_PARAMS.concat(`?type=`)
  }
  return await (await API.get<IRepositories[]>(`users/${user}/repos${QUERY_PARAMS}`)).data;
}

async function fetchStarred(user: string) {
  return await (await API.get<IRepositories[]>(`users/${user}/starred?per_page=10&page=1&sort=created`)).data;
}

function Repository({ repository, login }: { repository: IRepositories, login: string }) {
  return (
    <div className="mb-7 border-b border-b-zinc-200 pb-3.5">
      <h3 className="text-xl font-light">{login} /
        <a href={repository.html_url} className="font-medium text-[#0587FF]">{repository.name}</a>
      </h3>
      <p className="text-zinc-500 font-normal py-1.5">{repository.description}</p>
      <ul className="flex items-center gap-3">
        <li className="font-medium text-base">{repository.language}</li>
      </ul>
    </div>
  )
}

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-1 mt-5">
      <SmileySad size={50} color="#111" />
      <p className="text-zinc-700 font-medium">Não encontramos repositórios com o filtro aplicado!</p>
    </div>
  )
}

type TYPES = "source" | "fork" | "archived" | "mirror"
type TAB = "repositories" | "stars"

export default function Repositories() {
  const login = useAccount(state => state.state.account?.login);
  const searchParams = useSearchParams();
  const queryTab = searchParams.get("tab") as TAB;
  const queryType = searchParams.get("type") as TYPES;
  const queryLanguage = searchParams.get("language") as string;

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const data = queryTab === "repositories" ? await fetchRepositories(login!, queryType) : await fetchStarred(login!);

      let filteredData: IRepositories[] = [...data];

      searchParams.forEach((value, key) => {
        if (key && key === "type") filteredData = filteredData.filter(repo => repo[queryType] === true)
        if (key && key === "language") filteredData = filteredData.filter(repo => repo.language === searchParams.get("language"))
      })

      return filteredData
    },
    queryKey: [queryTab, queryType, queryLanguage, login],
    enabled: !!login
  });


  if (isLoading) return <LoadingRepository />

  return (
    <section id="repository" className="mt-8">
      <div>
        {data && data.length ? data.map(repository => <Repository login={login!} repository={repository} key={repository.name} />) : <NotFound />}
      </div>
    </section>
  )
}
