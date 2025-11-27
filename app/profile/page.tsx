"use client"

import Header from '../components/Header'
import Aside from '../components/Aside'
import Link from 'next/link'
import { BookBookmark, MagnifyingGlass, Star } from 'phosphor-react'
import { MultiSelect } from 'primereact/multiselect'

export default function Profile() {
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  return (
    <div>
      <Header />
      <main className='w-4/5 m-auto'>
        <div className='grid grid-cols-[380px_1fr] gap-8 mt-10'>
          <Aside />
          <div>
            <nav>
              <ul className='flex gap-7'>
                <li>
                  <Link href="/profile?type=repositories" className='flex items-center gap-2 text-zinc-800 border-b-2 border-[#FD8C73] pb-1.5'>
                    <BookBookmark size={25} color="#111" />
                    <p className='flex items-center gap-1.5 text-lg text-zinc-800 font-normal w-full'>Repositories
                      <span className='text-sm font-normal w-10 pl-3 bg-[#F8F8F8] text-[#989898] border border-zinc-300 rounded-full'>
                        81
                      </span>
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/profile?type=stars" className='flex items-center gap-2 text-zinc-500'>
                    <Star size={25} />
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
                  <MultiSelect
                    options={cities}
                    optionLabel='name'
                    placeholder="Type"
                    id='dropdown'
                    className='rounded-full!'
                  />
                  <MultiSelect
                    options={cities}
                    optionLabel='name'
                    placeholder="Language"
                    id='dropdown'
                    className='rounded-full!'
                  />
                </div>
              </div>
            </nav>
          </div>

        </div>
      </main>
    </div>
  )
}
