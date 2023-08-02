import '@/styles/index.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

import ClientProvider from '@/providers/clientProvider'
import { clsxm } from '@/lib/helper/clsx'
import Baidu from '@/components/baidu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tools whatfa',
  description: '在线工具',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="noise " data-theme="light">
      <head>
        <Baidu />
      </head>

      <body className={clsxm(inter.className, 'font-serif')}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
