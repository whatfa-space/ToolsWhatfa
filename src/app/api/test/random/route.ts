import { generateRandomString, Success } from '@/utils'

export const dynamic = 'force-dynamic'

export function GET() {
  const random = generateRandomString(4)
  return Success({ random })
}
