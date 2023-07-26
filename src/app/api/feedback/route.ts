import prisma from '@/lib/prisma'
import { success } from '@/utils/response'

interface ReqBody {
  // showOnBoard: boolean
  email: string
  content: string
}

export async function POST(req: Request) {
  const { content, email }: ReqBody = await req.json()

  const feedback = await prisma.feedback.create({
    data: {
      email,
      content,
    },
  })
  return success(feedback)
}

export async function GET() {
  const feedbackList = await prisma.feedback.findMany()
  return success(feedbackList)
}
