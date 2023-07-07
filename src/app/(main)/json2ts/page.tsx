'use client'

import { TagContainer } from '@/components/layout/tag-container'
import { useCallback, useState } from 'react'
import { JsonReader } from '@dellarosamarco/json-2-ts'
import copy from 'copy-to-clipboard'

export default function Json2Ts() {
  const [json, setJson] = useState('')
  const [tsResult, setTsResult] = useState('')

  const handleConvert = useCallback(() => {
    try {
      const jsonObj = JSON.parse(json)
      const result = JsonReader.convert(jsonObj)
      setTsResult(result)
      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }, [json])

  const onInput = useCallback((event: any) => {
    setJson(event.target.value)
  }, [])
  const handleCopy = useCallback(() => {
    copy(tsResult)
  }, [tsResult])

  return (
    <div className='p-6'>
      <TagContainer title='Json转typescript'>
        <h2 className='m-1'>在线JSON转typescript工具</h2>
        <textarea value={json} onChange={onInput} className='textarea textarea-bordered w-full h-40 md:h-56' placeholder='请输入JSON'></textarea>
        <div className='flex my-4'>
          <button onClick={handleConvert} className='btn btn-sm btn-neutral mr-2'>转换</button>
          <button onClick={handleCopy} className='btn btn-sm btn-neutral'>复制</button>
        </div>
        <textarea value={tsResult} className='textarea textarea-bordered w-full h-40 md:h-56' disabled placeholder='等待转换...'></textarea>
      </TagContainer>
    </div>
  )
}