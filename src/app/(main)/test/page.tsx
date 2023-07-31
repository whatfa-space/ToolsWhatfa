import { url } from '@/utils/url'
import TestRedis from './TestRedis'

export default async function Test() {
  const id = '123'
  let reaction: number = 0
  try {
    const res = await fetch(url('/api/reaction?id=' + id), {
      method: 'GET',
      cache: 'no-store', // 不缓存
    })
    const { data } = await res.json()
    if (Number.isInteger(data.count)) {
      reaction = data.count
    }
    console.log('----data', data)
  } catch (error) {
    console.error(error)
  }

  return (
    <div>
      <TestRedis reaction={reaction} />
    </div>
  )
}
