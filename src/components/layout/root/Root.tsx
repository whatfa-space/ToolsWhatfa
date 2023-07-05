import Header from '@/app/header'
import { FC, PropsWithChildren } from 'react'

export const Root:FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
  </>)