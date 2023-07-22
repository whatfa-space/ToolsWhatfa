'use client'

import { TagContainer } from '@/components/layout/tag-container'
import { useCallback, useState } from 'react'
import copy from 'copy-to-clipboard'

export default function JsonFormat() {
  const [json, setJson] = useState('')
  const [tsResult, setTsResult] = useState('')

  const handleConvert = useCallback(() => {
    try {
      const jsonObj = JSON.parse(json)
      const result = JSON.stringify(jsonObj, null, 2)
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
    <main className="p-6 pt-14">
      <TagContainer title="json格式化">
        <h2 className="m-1">在线Json格式化工具</h2>
        <textarea
          value={json}
          onChange={onInput}
          className="textarea textarea-bordered w-full h-40 md:h-56"
          placeholder="请输入JSON"
        ></textarea>
        <div className="flex my-4">
          <button
            onClick={handleConvert}
            className="btn btn-sm btn-neutral mr-2"
          >
            格式化
          </button>
          <button onClick={handleCopy} className="btn btn-sm btn-neutral">
            复制
          </button>
        </div>
        <textarea
          value={tsResult}
          className="textarea textarea-bordered w-full h-40 md:h-56"
          readOnly
          placeholder="等待转换..."
        ></textarea>
      </TagContainer>
    </main>
  )
}
