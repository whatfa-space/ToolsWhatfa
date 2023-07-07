import Header from '@/app/header'
import { FC, PropsWithChildren } from 'react'
import { Footer } from '../footer'

export const Root: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>)