import { IToolsPanel } from '@/interface/tools'

export const toolPanels: IToolsPanel[] = [
  {
    title: '热门',
    icon: 'faFire',
    tools: [
      {
        title: '二维码生成',
        desc: '链接转二维码',
        link: '/qrcode',
        icon: 'faQrcode',
      },
      {
        title: 'wait...',
        desc: 'wait...',
        icon: 'faCode',
      },
    ],
  },
  {
    title: '编程',
    icon: 'faComputer',
    tools: [
      {
        title: 'json2ts',
        desc: 'Json转typescript',
        icon: 'faCode',
        link: '/json2ts',
      },
      {
        title: 'json格式化',
        desc: 'Json格式化工具',
        icon: 'faCode',
        link: '/jsonFormat',
      },
      {
        title: 'wait...',
        desc: 'wait...',
        icon: 'faCode',
      },
    ],
  },
  // {
  //   title: '链接',
  //   icon: 'faLink',
  //   tools: [
  //     {
  //       title: 'JSON',
  //       desc: 'JSON转typescript',
  //       icon: 'faCode',
  //     },
  //     {
  //       title: 'JSON',
  //       desc: 'JSON转typescript',
  //       icon: 'faCode',
  //     },
  //     {
  //       title: 'JSON',
  //       desc: 'JSON转typescript',
  //       icon: 'faCode',
  //     },
  //     {
  //       title: 'JSON',
  //       desc: 'JSON转typescript',
  //       icon: 'faCode',
  //     },
  //     {
  //       title: 'JSON',
  //       desc: 'JSON转typescript',
  //       icon: 'faCode',
  //     },
  //     {
  //       title: 'JSON',
  //       desc: 'JSON转typescript',
  //       icon: 'faCode',
  //     },
  //     {
  //       title: 'JSON',
  //       desc: 'JSON转typescript',
  //       icon: 'faCode',
  //     },
  //   ],
  // },
]
