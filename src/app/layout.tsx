import '@/styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

import ClientProvider from '@/providers/clientProvider'
import { clsxm } from '@/lib/helper/clsx'
import Baidu from '@/components/baidu'
import TToastContainer from '@/components/common/TToastContainer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tools whatfa',
  description: '在线工具',
  // referrer: 'strict-origin-when-cross-origin',
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

      <body className={clsxm(inter.className, 'font-mono')}>
        <ClientProvider>{children}</ClientProvider>
        <TToastContainer />
      </body>
    </html>
  )
}
