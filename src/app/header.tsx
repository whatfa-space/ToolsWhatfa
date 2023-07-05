import { ThemeSwitch } from '@/components/common/theme-switch'

export default function Header() {
  return (
    <header className='p-2 flex items-center justify-center'>
      <div className='text-2xl' >ToolsWhatfa - 免费工具</div>
      <ThemeSwitch />
    </header>
  )
}