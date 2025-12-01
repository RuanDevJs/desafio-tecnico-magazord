"use client";

import { useQuery } from "@tanstack/react-query";
import useAccount from "../../store/useAccount";

import API from "../../services/api";
import { IRepositories } from "../../types/accounts";

import LoadingRepository from "../Loading/LoadingRepository";
import { useSearchParams } from "next/navigation";

import useFilters from "../../store/useFilters";
import { LANGUAGES, TAB, TYPES } from "../../types/filters";

import NotFound from "./NotFound";
import Link from "next/link";

async function fetchRepositories(user: string) {
  return await (await API.get<IRepositories[]>(`users/${user}/repos?per_page=10&page=1&sort=created`)).data;
}

async function fetchStarred(user: string) {
  return await (await API.get<IRepositories[]>(`users/${user}/starred?per_page=10&page=1&sort=created`)).data;
}

interface IProps {
  repository: IRepositories;
  login: string;
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

      if (querySeach) {
        return data?.filter(repo => repo.name.toLowerCase().includes(querySeach.toLowerCase()));
      }

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
    queryKey: [queryTab, login, language, querySeach, type],
    enabled: !!login
  });

  if (isLoading) return <LoadingRepository />

  return (
    <section id="repository" className="mt-8">
      <div>
        {data && data.length ? data.map(repository => <Repository login={login!} repository={repository} key={repository.name} />) : <NotFound type='filters' />}
      </div>
    </section>
  )
}

function Repository({ repository, login }: IProps) {
  return (
    <div className="mb-7 border-b border-b-zinc-200 pb-3.5 md:px-2.5">
      <h3 className="md:text-lg lg:text-xl font-light">{login} /
        <Link href={`/profile/${login}/${repository.name}`} className="font-medium text-[#0587FF]">{repository.name}</Link>
      </h3>
      <p className="md:text-sm lg:text-base text-zinc-500 font-normal py-1.5">{repository.description}</p>
      <ul className="flex items-center gap-3">
        <li className="font-medium md:text-sm lg:text-base">{repository.language}</li>
      </ul>
    </div>
  )
}
