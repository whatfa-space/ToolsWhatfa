import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: '在线Json格式化工具 - tools whatfa ',
  description: '在线Json格式化工具 - tools whatfa ',
  keywords:
    'toolswhatfa , 免费在线Json格式化工具, json格式化, free json format',
}

export default function Layout({ children }: PropsWithChildren) {
  return <>{children}</>
}
