import { TagContainer } from '@/components/layout/tag-container'
import type { Metadata } from 'next'
import CodeImgGen from './QRcodeGen'

export const meta: Metadata = {
  title: '二维码生成',
  description: '二维码生成 链接转二维码',
}

export default function JsonFormat() {
  return (
    <main className='p-6 pt-14'>
      <TagContainer title='二维码生成'>
        <CodeImgGen />
        {/* <h2 className='m-1'>在线Json格式化工具</h2> */}
      </TagContainer>
    </main>
  )
}