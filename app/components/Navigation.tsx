import Link from 'next/link'
import { tv } from "tailwind-variants"

import { BookBookmark, MagnifyingGlass, Star } from 'phosphor-react'
import { MultiSelect } from 'primereact/multiselect'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { Dropdown } from 'primereact/dropdown'

const linkVariant = tv({
  base: "flex items-center gap-2 transition ease-in-out border-b-2 pb-1.5 border-transparent",
  variants: {
    active: {
      true: "text-zinc-800 border-b-2 border-[#FD8C73] pb-1.5",
      false: "text-zinc-500"
    }
  }
})

const types = [
  { name: 'All', code: 'all' },
  { name: 'Sources', code: 'source' },
  { name: 'Forks', code: 'fork' },
  { name: 'Archived', code: 'archived' },
  { name: 'Mirros', code: 'mirror' }
];
const language = [
  { name: 'All', code: 'all' },
  { name: 'Scss', code: 'scss' },
  { name: 'Java', code: 'java' },
  { name: 'Typescript', code: 'typescript' },
  { name: 'Javascript', code: 'javascript' },
  { name: 'HTML', code: 'html' },
  { name: 'CSS', code: 'css' }
];

export default function Navigation() {
  const searchParams = useSearchParams();
  const queryType = searchParams.get("tab");

  const [type, setType] = useState<typeof types[0]>();
  const [language, setLanguage] = useState<typeof language[]>([])

  const router = useRouter();

  function handlePushNavigate() {
    return router.push(`/profile?tab=${queryType}&type=${type?.code}`)
  }

  return (
    <nav>
      <ul className='flex gap-7'>
        <li>
          <Link href="/profile?tab=repositories" className={linkVariant({ active: queryType === "repositories" })}>
            <BookBookmark size={34} />
            <p className='flex items-center gap-1.5 text-base font-normal w-full'>Repositories
              <span className='text-sm font-normal w-10 pl-3 bg-[#F8F8F8] text-[#989898] border border-zinc-300 rounded-full'>
                81
              </span>
            </p>
          </Link>
        </li>
        <li>
          <Link href="/profile?tab=stars" className={linkVariant({ active: queryType === "stars" })}>
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
          <MagnifyingGlass size={25} weight='bold' />
          <input type="text" placeholder='Search Here' className='w-full p-3.5 text-zinc-500 outline-none' />
        </div>
        <div className='flex gap-5'>
          <Dropdown
            options={types}
            optionLabel='name'
            placeholder="Type"
            id='dropdown'
            className='rounded-full!'
            value={type}
            onChange={data => setType(data.value)}
            onHide={handlePushNavigate}
          />
          <MultiSelect
            options={language}
            optionLabel='name'
            placeholder="Language"
            id='dropdown'
            className='rounded-full!'
          />
        </div>
      </div>
    </nav>
  )
}
