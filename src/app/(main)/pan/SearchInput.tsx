'use client'

import { getInputValue } from '@/utils'
import { useRouter } from 'next/navigation'

import { FormEvent, useCallback, useState } from 'react'
interface IProps {
  original: string
}

const getPanSearchUrl = (searchWords: string) => {
  return `/pan/search?keywords=${searchWords}`
}

export default function SearchInput({ original }: IProps) {
  const [searchWords, setSearchWords] = useState(original)
  const router = useRouter()

  const handleJoin = useCallback(() => {
    router.push(getPanSearchUrl(searchWords))
  }, [router, searchWords])

  const handleChange = useCallback((event: FormEvent) => {
    const value = getInputValue(event)
    setSearchWords(value)
  }, [])

  return (
    <div className="flex max-w-md m-auto">
      <input
        value={searchWords}
        onChange={handleChange}
        type="text"
        className="input input-bordered focus:outline-0 rounded-r-none border-r-0 w-full"
        placeholder="请输入关键词"
      />
      <button
        onClick={handleJoin}
        className="btn btn-neutral border-l-0 rounded-l-none no-animation relative"
      >
        搜索
      </button>
    </div>
  )
}
