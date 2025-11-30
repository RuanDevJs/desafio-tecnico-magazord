"use client"

import Header from '../components/Header'
import Aside from '../components/Aside'
import Navigation from '../components/Profile/Navigation'
import Repositories from '../components/Profile/Repositories';


export default function Profile() {
  return (
    <div>
      <Header />
      <main className='w-4/5 m-auto'>
        <div className='grid lg:grid-cols-[380px_1fr] gap-8 mt-10 sm:grid-cols-1'>
          <Aside />
          <div>
            <Navigation />
            <Repositories />
          </div>
        </div>
      </main>
    </div>
  )
}
