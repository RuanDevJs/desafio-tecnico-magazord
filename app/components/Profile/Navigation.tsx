import { useState } from 'react'

import Link from 'next/link'
import { tv } from "tailwind-variants"

import { BookBookmark, MagnifyingGlass, Star } from 'phosphor-react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Dropdown } from 'primereact/dropdown'
import useFilters from '../../store/useFilters'

import { ILanguage, IType } from '../../types/filters'

const linkVariant = tv({
  base: "flex items-center gap-2 transition ease-in-out border-b-2 pb-1.5 border-transparent",
  variants: {
    active: {
      true: "text-zinc-800 border-b-2 border-[#FD8C73] pb-1.5",
      false: "text-zinc-500"
    }
  }
})

const TYPES: IType[] = [
  { name: 'All', code: 'all' },
  { name: 'Sources', code: 'source' },
  { name: 'Forks', code: 'fork' },
  { name: 'Archived', code: 'archived' },
  { name: 'Mirros', code: 'mirror' }
];

const LANGUAGES: ILanguage[] = [
  { name: 'All', code: 'all' },
  { name: 'Scss', code: 'scss' },
  { name: 'Java', code: 'java' },
  { name: 'Typescript', code: 'TypeScript' },
  { name: 'Javascript', code: 'JavaScript' },
  { name: 'HTML', code: 'html' },
  { name: 'CSS', code: 'css' }
];

export default function Navigation() {
  const [input, setIput] = useState<string>("");
  const searchParams = useSearchParams();
  const queryTab = searchParams.get("tab");

  const { state, actions } = useFilters((state) => state);
  const { language, type } = state;
  const { setType, setLanguage } = actions;

  const router = useRouter();

  function reset() {
    setType(undefined)
    setLanguage(undefined)
  }

  function handlePushNavigate() {
    const URL = new URLSearchParams();

    if (type && type.code === "all") {
      reset();
      return router.push(`/profile?tab=${queryTab}`)
    };
    if (language && language.code === "all") {
      reset();
      return router.push(`/profile?tab=${queryTab}`);
    }

    if (type && type.code) URL.set("type", type.code)
    if (language && language.code) URL.set("language", language.code)

    return router.push(`/profile?tab=${queryTab}&${URL.toString()}`)
  }

  function handleSearch() {
    if (input && input.length >= 3) {
      return router.push(`/profile?tab=${queryTab}&search=${input}`);
    }
    return router.push(`/profile?tab=repositories`);
  }

  return (
    <nav>
      <ul className='flex gap-7'>
        <li>
          <Link href="/profile?tab=repositories" className={linkVariant({ active: queryTab === "repositories" })}>
            <BookBookmark size={34} />
            <p className='flex items-center gap-1.5 text-base font-normal w-full'>Repositories
              <span className='text-sm font-normal w-10 pl-3 bg-[#F8F8F8] text-[#989898] border border-zinc-300 rounded-full'>
                81
              </span>
            </p>
          </Link>
        </li>
        <li>
          <Link href="/profile?tab=stars" className={linkVariant({ active: queryTab === "stars" })}>
            <Star size={34} />
            <p className='flex items-center gap-1.5 text-lg font-normal w-full'>Starred
              <span className='text-sm font-normal w-10 pl-3 bg-[#F8F8F8] text-[#989898] border border-zinc-300 rounded-full'>
                12
              </span>
            </p>
          </Link>
        </li>
      </ul>
      <div className='grid grid-cols-2 mt-8 gap-3' style={{ alignItems: "start" }}>
        <div className='flex items-center gap-3 text-[#989898] border-b border-b-[#F4F4F4]'>
          <button type="submit" onClick={handleSearch} className='bg-transparent border-none outline-none cursor-pointer'>
            <MagnifyingGlass size={25} weight='bold' />
          </button>
          <input type="text" onChange={(event) => setIput(event.target.value)} placeholder='Search Here' className='w-full p-3.5 text-zinc-500 outline-none' />
        </div>
        <div className='flex gap-5'>
          <Dropdown
            options={TYPES}
            optionLabel='name'
            placeholder="Type"
            id='dropdown'
            className='rounded-full!'
            value={type}
            onChange={data => setType(data.value)}
            onHide={handlePushNavigate}
          />
          <Dropdown
            options={LANGUAGES}
            optionLabel='name'
            placeholder="Language"
            id='dropdown'
            className='rounded-full!'
            value={language}
            onChange={event => setLanguage(event.value)}
            onHide={handlePushNavigate}
          />
        </div>
      </div>
    </nav>
  )
}
