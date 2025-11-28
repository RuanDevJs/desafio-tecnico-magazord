import React from 'react'
import AccountProvider from '../components/AccountProvider'

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <AccountProvider>
      {children}
    </AccountProvider>
  )
}
