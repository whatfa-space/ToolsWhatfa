import { IPan } from '@/interface/pan/common'
import { ISearchRes } from '@/interface/pan/http'
import { Fail, Success } from '@/utils'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const keywords = searchParams.get('keywords')
  const page = Number(searchParams.get('page')) || 1
  if (!keywords) {
    return Fail('missing keywords')
  }

  const panList: IPan[] = [
    {
      title: 'aa资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: '123',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'd2fd23',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
    {
      title: '资源管理Q-Dir 10.4.1x32x64便携版.exe',
      code: '2121',
      utl: 'frwfrkj',
    },
  ]

  return Success<ISearchRes>({ panList, keywords, page })
}
