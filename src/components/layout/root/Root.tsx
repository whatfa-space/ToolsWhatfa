import Header from '@/app/header'
import { FC, PropsWithChildren } from 'react'
import { Footer } from '../footer'

export const Root: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="p-6 pt-14 fill-content">{children}</main>
    <Footer />
  </>
)
