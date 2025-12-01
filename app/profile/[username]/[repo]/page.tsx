"use client"

import Commits from '@/app/components/Profile/Commits';
import API from '@/app/services/api';

import { IRepositories } from '@/app/types/accounts';
import { useQuery } from '@tanstack/react-query'

import { useParams } from 'next/navigation'
import { Code } from 'phosphor-react';

async function fetchRepository(username: string, repo: string) {
  return await (await API.get<IRepositories>(`/repos/${username}/${repo}`)).data
}

type TypeParams = {
  username: string;
  repo: string;
}

export default function Repo() {
  const params = useParams<TypeParams>();

  const repository = useQuery({
    queryKey: ["profile-repository", params.username, params.repo],
    queryFn: async () => fetchRepository(params.username, params.repo)
  });

  return (
    <main className='p-7'>
      <div className='w-[520px] m-auto'>
        <div className='space-y-1.5'>
          <div className='flex items-center gap-3.5'>
            <Code size={45} color="#3D3D4D" className='bg-white p-2 rounded-full' />
            <h1 className='text-4xl font-bold text-[#3D3D4D]'>{repository.data?.full_name}</h1>
          </div>
          <p className='text-base font-normal text-zinc-500 text-center'>{repository.data?.description}</p>
        </div>
        <ul className='grid grid-cols-3 mt-3.5 text-center'>
          <li>
            <h2 className='font-medium text-[#3D3D4D] text-2xl'>{repository.data?.stargazers_count}</h2>
            <p className='font-normal text-zinc-500 text-base'>Stars</p>
          </li>
          <li>
            <h2 className='font-medium text-[#3D3D4D] text-2xl'>{repository.data?.forks}</h2>
            <p className='font-normal text-zinc-500 text-base'>Forks</p>
          </li>
          <li>
            <h2 className='font-medium text-[#3D3D4D] text-2xl'>{repository.data?.open_issues}</h2>
            <p className='font-normal text-zinc-500 text-base'>Issues</p>
          </li>
        </ul>
      </div>
      <Commits username={params.username} repo={params.repo} />
    </main>
  )
}
