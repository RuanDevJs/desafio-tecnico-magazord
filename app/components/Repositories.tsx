"use client";

import { useQuery } from "@tanstack/react-query";
import useAccount from "../store/useAccount";

import API from "../services/api";
import { IRepositories } from "../types/accounts";

import LoadingRepository from "./Loading";
import { useSearchParams } from "next/navigation";

import { SmileySad } from "phosphor-react";
import useFilters from "../store/useFilters";
import { LANGUAGES, TAB, TYPES } from "../types/filters";

async function fetchRepositories(user: string) {
  return await (await API.get<IRepositories[]>(`users/${user}/repos?per_page=10&page=1&sort=created`)).data;
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

export default function Repositories() {
  const login = useAccount(state => state.state.account?.login);
  const searchParams = useSearchParams();

  const queryTab = searchParams.get("tab") as TAB;
  const { language, type } = useFilters((state) => state.state);

  const querySeach = searchParams.get("search") as string;

  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const data = queryTab === "repositories" ? await fetchRepositories(login!) : await fetchStarred(login!);

      let filteredData: IRepositories[] = [...data];
      if (type !== undefined) {
        const code = type.code as TYPES;
        filteredData = filteredData.filter((repository) => repository[code] === true)
      }
      if (language !== undefined) {
        const code = language.code as LANGUAGES;
        filteredData = filteredData.filter((repository) => repository.language === code);
      }

      return filteredData;
    },
    queryKey: [queryTab, login, language, type],
    enabled: !!login
  });

  if (isLoading) return <LoadingRepository />

  if (querySeach) {
    const repository = data?.filter(repo => repo.name.toLowerCase().includes(querySeach.toLowerCase()));

    return (
      <div className="mt-8">
        {repository && repository.length ? repository.map(repository => <Repository login={login!} repository={repository} key={repository.name} />) : <NotFound />}
      </div>
    )
  }

  return (
    <section id="repository" className="mt-8">
      <div>
        {data && data.length ? data.map(repository => <Repository login={login!} repository={repository} key={repository.name} />) : <NotFound />}
      </div>
    </section>
  )
}
