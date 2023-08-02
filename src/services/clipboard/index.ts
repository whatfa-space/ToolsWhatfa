import { url } from '@/utils/url'

interface ClipboardRes {
  content: string
  id: string
}

export async function getClipboard(id: string): Promise<ClipboardRes> {
  const res = await fetch(url('/api/clipboard?id=' + id+'&r='+Math.random()), {
    method: 'GET',
    cache: 'no-cache',
  })
  const { data } = await res.json()
  return data
}

export async function saveClipboard(
  id: string,
  content: string
): Promise<ClipboardRes> {
  const res = await fetch(url('/api/clipboard'), {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      content,
    }),
  })
  const { data } = await res.json()
  return data
}
