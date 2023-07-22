import '@/styles/index.css'
import { Metadata } from 'next'

import { Root } from '@/components/layout/root/Root'

export const metadata: Metadata = {
  title: 'tools whatfa',
  description: '在线工具',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Root>{children}</Root>
}
