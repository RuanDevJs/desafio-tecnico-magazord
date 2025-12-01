"use client"

import Aside from '../../components/Aside'
import Navigation from '../../components/Profile/Navigation'
import Repositories from '../../components/Profile/Repositories';

export default function Profile() {
  return (
    <main className='sm:w-[60%] md:w-[80%] lg:w-4/5  m-auto' id="profile">
      <div className='grid md:grid-cols-[220px_1fr] 2xl:grid-cols-[300px_1fr] gap-8 mt-10 sm:grid-cols-1'>
        <Aside />
        <div>
          <Navigation />
          <Repositories />
        </div>
      </div>
    </main>
  )
}
