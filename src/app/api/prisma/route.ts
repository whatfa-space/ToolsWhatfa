import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

// export async function GET(req: NextRequest) {
export async function POST() {
  // if (!success) {
  //   return new Response("err", {
  //     status: 0,
  //   });
  // }
  const user = await prisma.user.create({
    data: {
      name: 'apple',
      email: 'apple@prisma.io',
    },
  })
  console.log(user)
  return NextResponse.json({
    code: 200,
    data: user,
    message: 'success',
  })
}

export async function GET() {
  // if (!success) {
  //   return new Response("err", {
  //     status: 0,
  //   });
  // }
  const users = await prisma.user.findMany({ select: 'id' })

  console.log(users)
  return NextResponse.json({
    code: 200,
    data: users,
    message: 'success',
  })
}
