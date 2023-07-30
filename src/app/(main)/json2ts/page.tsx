import { TagContainer } from '@/components/layout/tag-container'
import MainArea from './MainArea'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'json转ts - tools whatfa',
  description:
    'json转ts - tools whatfa 免费在线Json格式化工具  free json format',
  keywords:
    'toolswhatfa , 免费在线Json格式化工具, json格式化, free json format',
}

export default function Json2Ts() {
  return (
    // <main className="p-6 pt-14">
    <TagContainer title="json转ts">
      <h2 className="ml-1 my-3 text-sm md:text-lg">
        在线JSON转typescript工具 转驼峰/下划线/格式化
      </h2>
      <MainArea />
    </TagContainer>
    // </main>
  )
}
