'use client'
import Header from '@/app/header'
import { useJitsuPage } from '@/hooks/common/useJitsuPage'
import { FC, PropsWithChildren } from 'react'
import { Footer } from '../footer'

export const Root: FC<PropsWithChildren> = ({ children }) => {
  useJitsuPage()
  return (
    <>
      {/* <Header /> */}
      <main className="p-6 pt-14 fill-content">{children}</main>
      <Footer />
    </>
  )
}
