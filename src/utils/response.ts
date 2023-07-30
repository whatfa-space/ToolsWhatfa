import { NextResponse } from 'next/server'

export enum ResCode {
  USER_ERROR = 400,
  SERVER_ERROR = 502,
  SUCCESS = 0,
}

export interface ResponseData<T> {
  data: T
  message: string
  success: boolean
  code: ResCode
}

export function buildResponseData<T>({
  data,
  message = 'success',
  success = true,
  code = ResCode.SUCCESS,
}: Partial<ResponseData<T>>) {
  return { data, message, success, code }
}

export function success<T>(data: T) {
  return NextResponse.json(buildResponseData({ data }))
}

export function fail(message = 'error', code = ResCode.USER_ERROR) {
  return NextResponse.json(buildResponseData({ data: null, message, code }))
}
