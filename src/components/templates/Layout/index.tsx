import { Header } from '@/components/organisms/Header'
import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[100vh] bg-[#FFCDB2]'>
      <Header />
      {children}
    </div>
  )
}
