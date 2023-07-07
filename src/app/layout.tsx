import '@/styles/index.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

import ClientProvider from '@/providers/clientProvider'
import { Root } from '@/components/layout/root/Root'

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

    <html lang="zh" className="noise" data-theme="light" >
      <body className={inter.className}>
        <ClientProvider>
          <Root>
            {children}
          </Root>
        </ClientProvider>
      </body>
    </html>
  )
}
