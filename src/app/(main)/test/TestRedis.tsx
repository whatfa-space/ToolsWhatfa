'use client'
import { FC, useCallback, useState } from 'react'

const TestRedis: FC<{ reaction: number }> = ({ reaction }) => {
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

  return (
    <div>
      redis Welcome {count}
      <div>test</div>
      <button className="btn" onClick={handleIncr}>
        like
      </button>
    </div>
  )
}
export default TestRedis
