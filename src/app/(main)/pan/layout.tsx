import { TagContainer } from '@/components/layout/tag-container'

import { PropsWithChildren } from 'react'

export default async function Layout({
  children,
}: PropsWithChildren<{
  searchParams: { keywords: string }
}>) {
  return (
    <TagContainer title="网盘搜索">
      <h2 className="ml-1 my-3 text-sm md:text-lg text-center">
        网盘资源在线搜索
      </h2>
      {children}
    </TagContainer>
  )
}
