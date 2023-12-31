'use client'

import { useCallback } from 'react'

interface IPanItemProps {
  title: string
  code: string
  url: string
}
export default function PanItem({ title, url, code = '-' }: IPanItemProps) {
  const openInNewTab = useCallback((url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }, [])

  const handleGo = useCallback(() => {
    openInNewTab(url)
  }, [openInNewTab, url])

  return (
    <div className="flex border-b pb-4">
      <div className="flex flex-col flex-1 gap-2 text-sm">
        <div className="s text-lg font-semibold">{title}</div>
        <div>提取码: {code}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="cursor-pointer">复制跳转码</div>
        <div onClick={handleGo} className="cursor-pointer">
          跳转
        </div>
      </div>
    </div>
  )
}
