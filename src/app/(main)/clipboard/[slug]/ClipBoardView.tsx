'use client'

import { getInputValue } from '@/utils'
import { FormEvent, useCallback, useState } from 'react'

const ClipBoardView = () => {
  const [content, setContent] = useState('')

  const onChange = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setContent(value)
  }, [])

  return (
    <div className="mt-2">
      <textarea
        className="textarea textarea-bordered w-full h-64"
        placeholder="请输入内容"
        value={content}
        onChange={onChange}
      />
      <div className="flex mt-2">
        <button className="btn btn-neutral btn-sm mr-5">复制</button>
        <button className="btn btn-outline btn-sm">保存</button>
      </div>
    </div>
  )
}

export default ClipBoardView
