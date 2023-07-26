import { NextResponse } from 'next/server'

export interface ResponseData<T> {
  data: T
  message: string
  success: boolean
  code: number
}

export function buildResponseData<T>({
  data,
  message = 'success',
  success = true,
  code = 0,
}: Partial<ResponseData<T>>) {
  return { data, message, success, code }
}

export function success<T>(data: T) {
  return NextResponse.json(buildResponseData({ data }))
}
