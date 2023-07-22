import TLink from '@/components/ui/TLink/t-link'

export default function Guide() {
  return (
    <main className="w-full h-screen flex flex-col items-center">
      <header className="text-center leading-10">
        <h1 className="m-4 text-xl">免费网站 www.whatfa.com</h1>
      </header>
      <div>
        免费chatgpt网站：
        <TLink href="https://gpt.whatfa.com">https://gpt.whatfa.com</TLink>
      </div>
      <div>
        免费在线工具网站：
        <TLink href="https://tools.whatfa.com">https://tools.whatfa.com</TLink>
      </div>
    </main>
  )
}
