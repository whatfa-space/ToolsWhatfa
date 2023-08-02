import { generateRandomString, Success } from '@/utils'

export function GET() {
  const random = generateRandomString(4)
  return Success({ random })
}
