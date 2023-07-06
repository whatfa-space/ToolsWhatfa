import { ThemeSwitch } from '@/components/common/theme-switch'

export default function Header() {
  return (
    <header className='px-6 py-2  flex items-center justify-between'>
      <div className='text-xl md:text-2xl flex-1 text-center'>ToolsWhatfa - 免费工具</div>
      <ThemeSwitch />
    </header>
  )
}