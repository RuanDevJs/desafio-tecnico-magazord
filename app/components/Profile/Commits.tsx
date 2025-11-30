"use client"

import API from '@/app/services/api';
import { ICommits } from '@/app/types/accounts';
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link';
import { ArrowRight } from 'phosphor-react';
import LoadingRepository from '../Loading/LoadingRepository';

async function fetchCommits(username: string, repo: string) {
  return await (await API.get<ICommits[]>(`/repos/${username}/${repo}/commits`)).data
}

interface IProps {
  username: string;
  repo: string;
}

function Commit({ data }: { data: ICommits }) {
  return (
    <div className='bg-white py-3.5 px-4 rounded'>
      <div className='flex items-center justify-between'>
        <div>
          <h3 className='text-xl font-medium text-zinc-900 pb-1.5'>{data.commit.message}</h3>
          <p className='text-sm font-normal text-zinc-500'>{data.commit.author.name}</p>
        </div>
        <div>
          <a href={data.html_url} className='bg-zinc-200 block p-1 rounded-full transition ease-in-out hover:bg-zinc-300'>
            <ArrowRight size={25} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Commits({ username, repo }: IProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["commits"],
    queryFn: async () => fetchCommits(username, repo)
  });

  if (isLoading) {
    return <LoadingRepository />
  }

  return (
    <section className='w-[520px] mt-8 mx-auto'>
      <div className='grid grid-cols-1 justify-center gap-5'>
        {data && data.length ? data.map((commit) => <Commit data={commit} key={commit.sha} />) : null}
      </div>
    </section>
  )
}
