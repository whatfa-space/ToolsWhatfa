import { TagContainer } from '@/components/layout/tag-container'
import MainArea from './MainArea'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'json转ts - tools whatfa',
  description: '在线工具',
}

export default function Json2Ts() {
  return (
    <main className="p-6 pt-14">
      <TagContainer title="json转ts">
        <h2 className="ml-1 my-3 text-sm md:text-lg">
          在线JSON转typescript工具 转驼峰/下划线/格式化
        </h2>
        <MainArea />
      </TagContainer>
    </main>
  )
}
