// import { Metadata } from 'next'

import SearchInput from './SearchInput'

// export const metadata: Metadata = {
//   title: '网盘资源搜索 - tools whatfa',
//   description: '网盘资源在线搜索',
//   keywords: 'toolswhatfa ,网盘资源搜索',
// }

export default function Page({
  searchParams,
}: {
  searchParams: { keywords: string }
}) {
  return (
    <>
      <SearchInput original={searchParams?.keywords || ''} />
    </>
  )
}
