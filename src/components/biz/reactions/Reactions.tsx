'use client'
import { LikeIcon } from '@/components/icon/LikeIcon'
import { getReaction, reaction } from '@/services/reactions'
import { useCallback, useState } from 'react'

interface ReactionsProps {
  id: string
  count: number
}

// export const dynamic = 'force-dynamic'

export const Reactions = ({ id, count: likeNum }: ReactionsProps) => {
  const [count, setCount] = useState<number>(likeNum)
  const handleLike = useCallback(() => {
    reaction(id).then((res) => {
      setCount(res.count)
    })
    getReaction(id)
  }, [])
  return (
    <div
      onClick={handleLike}
      className="cursor-pointer flex justify-center select-none my-2"
    >
      <LikeIcon />
      <span>{count}</span>
    </div>
  )
}
