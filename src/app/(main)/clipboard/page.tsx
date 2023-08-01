import { generateRandomString } from '@/utils'
import InputId from './InputId'

export default async function Clipboard() {
  const initId = generateRandomString(4)
  return (
    <>
      <p className="text-center text-2xl">在线剪切板 内容跨端分享</p>
      <InputId initId={initId} />
    </>
  )
}
