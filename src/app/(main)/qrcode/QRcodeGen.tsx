'use client'

import { getInputValue } from '@/utils'
import { useQRCode } from 'next-qrcode'
import { FormEvent, useCallback, useState } from 'react'

export const QRcodeGen = () => {
  const { Image: QrCodeImage } = useQRCode()
  const [text, setText] = useState('https://tools.whatfa.com/')
  const [inputText, setInputText] = useState('https://tools.whatfa.com/')

  const handleInput = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setInputText(value)
  }, [])

  const handleGen = useCallback(() => {
    setText(inputText)
  }, [inputText])

  return (
    <div className='flex flex-col items-center md:flex-row md:min-h-[200px] justify-center'>
      <div className='flex flex-col my-3 md:mr-10 w-full max-w-lg'>
        <textarea value={inputText} className='textarea textarea-bordered w-full' onInput={handleInput} placeholder='请输入网址 https://xx.xxx 或任意文本'></textarea>
        <button onClick={handleGen} disabled={inputText.length <= 0} className='btn btn-sm btn-outline my-6'>生成二维码</button>
      </div>
      <div className='border shadow'>
        <QrCodeImage
          text={text}
          options={{
            type: 'image/jpeg',
            quality: 0.92,
            // level: 'M',
            level: 'Q',
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

    </div>
  )
}
export default QRcodeGen