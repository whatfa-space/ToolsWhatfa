import { generateRandomString, Success } from '@/utils'

export function GET() {
  return Success({ random: generateRandomString(4) })
}
