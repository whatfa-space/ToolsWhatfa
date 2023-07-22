import { TagContainer } from '@/components/layout/tag-container'
import { Metadata } from 'next'
// import History from './history'
import CodeImgGen from './QRcodeGen'

export const metadata: Metadata = {
  title: '二维码生成',
  description: '二维码生成 链接转二维码',
}

export default function JsonFormat() {
  return (
    <main className="p-6 pt-14">
      <TagContainer title="二维码生成" icon="faQrcode">
        <CodeImgGen />
      </TagContainer>
      {/* <TagContainer title='历史' icon='faClockRotateLeft'>
        <History/>
      </TagContainer> */}
    </main>
  )
}
