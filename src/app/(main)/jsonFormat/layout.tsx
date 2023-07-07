import type{ Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'tools.whatfa 在线Json格式化工具',
  description: '在线Json格式化工具',
}

export default function Layout({ children }:PropsWithChildren) {
  return (
    <>
      { children }
    </>
  )
}