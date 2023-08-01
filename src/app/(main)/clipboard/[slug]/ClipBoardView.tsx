'use client'

import { saveClipboard } from '@/services/clipboard'
import { getInputValue } from '@/utils'
import { FC, FormEvent, useCallback, useState } from 'react'
import copy from 'copy-to-clipboard'

interface Props {
  initContent: string
  id: string
}
const ClipBoardView: FC<Props> = ({ initContent, id }) => {
  const [content, setContent] = useState(initContent)

  const onChange = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setContent(value)
  }, [])

  const handleSave = useCallback(() => {
    saveClipboard(id, content).then(() => {
      alert('已保存')
    })
  }, [content, id])

  const handleCopy = useCallback(() => {
    copy(content)
  }, [content])

  return (
    <div className="mt-4">
      <textarea
        className="textarea textarea-bordered w-full h-64"
        placeholder="请输入内容"
        value={content}
        onChange={onChange}
      />
      <div className="flex mt-4">
        <button onClick={handleCopy} className="btn btn-neutral btn-sm mr-5">
          复制
        </button>
        <button onClick={handleSave} className="btn btn-outline btn-sm">
          保存
        </button>
      </div>
    </div>
  )
}

export default ClipBoardView
