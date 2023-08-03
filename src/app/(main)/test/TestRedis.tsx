'use client'
import { getReaction } from '@/services/test'
import { FC, useCallback, useState } from 'react'

const TestRedis: FC<{ reaction: number; id: string }> = ({ reaction, id }) => {
  const [count, setCount] = useState(reaction)
  const handleIncr = useCallback(() => {
    fetch('/api/reaction?id=' + '123', { method: 'PATCH' }).then(
      async (res) => {
        const { data } = await res.json()
        const { count } = data
        setCount(count)
      }
    )
  }, [])
  const handleGet = useCallback(() => {
    getReaction(id).then((data) => {
      console.log(data)
    })
  }, [])

  return (
    <div>
      redis Welcome {count}
      <div>test</div>
      <button className="btn" onClick={handleIncr}>
        like
      </button>
      <button className="btn" onClick={handleGet}>
        get
      </button>
    </div>
  )
}
export default TestRedis
