import '@/styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

import ClientProvider from '@/providers/clientProvider'
import { clsxm } from '@/lib/helper/clsx'
import Baidu from '@/components/baidu'
import TToastContainer from '@/components/common/TToastContainer'
import Clarity from '@/components/clarity'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tools whatfa 在线工具',
  description: 'tools whatfa 在线工具',
  keywords: '在线工具,二维码,json,在线剪切板,共享',
  // referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    title: 'tools whatfa',
    description: '免费在线工具',
    siteName: 'tools whatfa',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://tools.whatfa.com',
    images: {
      url: 'https://tools.whatfa.com/favicon.ico',
      username: 'whatfa',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="noise " data-theme="light">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Baidu />
        <Clarity />
      </head>

      <body className={clsxm(inter.className, 'font-mono')}>
        <ClientProvider>{children}</ClientProvider>
        <TToastContainer />
      </body>
    </html>
  )
}
