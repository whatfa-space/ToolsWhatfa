'use client'
import { LikeIcon } from '@/components/icon/LikeIcon'
import { reaction } from '@/services/reactions'
import { prettifyNumber } from '@/utils/math'
import { useCallback, useMemo, useState } from 'react'

interface ReactionsProps {
  id: string
  count: number
}

export const Reactions = ({ id, count: likeNum }: ReactionsProps) => {
  const [count, setCount] = useState<number>(likeNum)
  const handleLike = useCallback(() => {
    reaction(id).then((res) => {
      setCount(res.count)
    })
  }, [])

  const countPretty = useMemo(() => {
    return prettifyNumber(count)
  }, [count])
  return (
    <div className=" flex justify-center">
      <div
        className="cursor-pointer select-none border rounded-full w-16 h-16 flex flex-col justify-center items-center my-3 hover:scale-125 transition-all"
        onClick={handleLike}
      >
        <LikeIcon />
        <span>{countPretty}</span>
      </div>
    </div>
  )
}
