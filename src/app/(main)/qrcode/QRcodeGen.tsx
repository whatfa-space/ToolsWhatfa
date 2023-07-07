'use client'

import { getInputValue } from '@/utils'
import { useQRCode } from 'next-qrcode'
import { FormEvent, useCallback, useState } from 'react'

export const QRcodeGen = () => {
  const { Image: QrCodeImage } = useQRCode()
  const [text, setText] = useState('https://tools.whatfa.com/')

  const handleInput = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setText(value)
  }, [])

  return (
    <div className='flex flex-col items-center md:flex-row md:min-h-[200px]'>
      <div className='flex flex-col mr-3 my-3'>
        <textarea value={text} className='textarea textarea-bordered mb-3' onInput={handleInput} placeholder='请输入网址 https://xx.xxx'></textarea>
        <button className='btn btn-sm  btn-outline'>生成二维码</button>
      </div>
      <QrCodeImage
        text={text}
        options={{
          type: 'image/jpeg',
          quality: 0.3,
          level: 'M',
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: '#000',
            light: '#fff',
          },
        }}
      />
    </div>
  )
}
export default QRcodeGen