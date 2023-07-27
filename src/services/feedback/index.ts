import prisma from '@/lib/prisma'
import { success } from '@/utils/response'

interface FeedBack {
  id: number | null
  showOnBoard: boolean | null
  email: string | null
  content: string | null
  createAt: Date | null
}
export async function getFeedback() {
  // const result = await prisma.feedback.findMany()
  const resp = await fetch('http://localhost:3000/api/feedback', {
    method: 'get',
  })
  const result: any = await resp.json()
  return result.data
}
