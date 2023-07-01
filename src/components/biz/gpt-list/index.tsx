import Image from 'next/image'
import Link from 'next/link'

const list = [
  // {
  //   icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
  //   url: 'https://chat.jinshutuan.com/#/chat/1687100551376',
  //   title: 'jinshutuan',
  // },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://ai.usesless.com',
    title: '小莓用AI',
  },
  {
    icon: 'https://i2.mjj.rip/2023/06/28/78469fb6eca51e9c794bb02dbc32aa71.png',
    url: 'https://chat.wuguokai.cn',
    title: 'wuguokai',
  },
]

const GptList = () => (
  <section className='max-w-lg  w-full mx-auto mt-3'>
    <ul className='w-full'>
      {
        list.map(item => (
          <li key={item.url} className='w-full mt-2'>
            <Link href={item.url} target='_blank'>
              <div className="flex justify-between items-center bg-neutral-50 dark:bg-neutral-800 p-2 rounded-lg">
                <div className='flex items-center'>
                  <div className='relative w-10 h-10 rounded-lg overflow-hidden dark:bg-slate-100 '>
                    <Image objectFit="contain" layout="fill" src={item.icon} alt={item.title}/>
                  </div>
                  <p className='ml-2 text-base'>{item.title}</p>
                </div>
                <p className='text-xs sm:text-sm text-sky-600'>点击访问&gt;</p>
              </div>
            </Link>
          </li>
        ))
      }
    </ul>

  </section>

)

export default GptList