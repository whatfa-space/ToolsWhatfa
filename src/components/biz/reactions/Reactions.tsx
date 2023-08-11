'use client'
import { LikeIcon } from '@/components/icon/LikeIcon'
import { reaction } from '@/services/reactions'
import { prettifyNumber } from '@/utils/math'
import { useCallback, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

interface ReactionsProps {
  id: string
  count: number
}

export const Reactions = ({ id, count: likeNum }: ReactionsProps) => {
  const [count, setCount] = useState<number>(likeNum)
  const handleLike = useCallback(() => {
    reaction(id)
      .then((res) => {
        setCount(res.count)
      })
      .catch(() => {})
  }, [])

  const countPretty = useMemo(() => {
    return prettifyNumber(count)
  }, [count])
  return (
    <div className=" flex justify-center">
      <motion.button
        type="button"
        className="cursor-pointer select-none border rounded-full w-16 h-16 flex flex-col justify-center items-center my-3 transition-all"
        whileTap={{
          scale: 1.3,
        }}
        onClick={handleLike}
      >
        <LikeIcon />
        <span>{countPretty}</span>
      </motion.button>
    </div>
  )
}
