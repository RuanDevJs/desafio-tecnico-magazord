"use client"

import Header from '../components/Header'
import Aside from '../components/Aside'
import Navigation from '../components/Navigation'


export default function Profile() {
  return (
    <div>
      <Header />
      <main className='w-4/5 m-auto'>
        <div className='grid grid-cols-[380px_1fr] gap-8 mt-10'>
          <Aside />
          <div>
            <Navigation />
          </div>
        </div>
      </main>
    </div>
  )
}
