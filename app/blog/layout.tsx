'use client'
import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState, useRef, useCallback } from 'react'
import clsx from 'clsx'
import { useLocale } from '@/lib/locale-context'

function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

// 目录组件
function BlogTOC({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  const locale = useLocale()
  const summaryText = locale === 'zh' ? '目录' : 'Summary'

  // 收集二级标题
  useEffect(() => {
    if (!containerRef.current) return
    const nodes = Array.from(
      containerRef.current.querySelectorAll('h2')
    ) as HTMLHeadingElement[]
    const hs = nodes.map((node) => {
      if (!node.id) {
        node.id = node.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9\u4e00-\u9fa5]+/gi, '-')
          .replace(/^-+|-+$/g, '') || ''
      }
      return { id: node.id, text: node.textContent || '' }
    })
    setHeadings(hs)
  }, [containerRef, locale])

  // 激活高亮
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return
      const scrollY = window.scrollY
      let current: string | null = null
      for (const h of headings) {
        const el = document.getElementById(h.id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 120
          if (scrollY >= top) current = h.id
        }
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [headings, containerRef])

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', `#${id}`)
    }
  }, [])

  if (!headings.length) return null

  return (
    <nav
      className="hidden lg:block w-48 pr-6 pt-2 text-sm"
      aria-label="Summary"
      style={{ minWidth: 160 }}
    >
      <div className="mb-3 pl-1 text-xs font-semibold tracking-widest text-zinc-400 dark:text-zinc-500 select-none">{summaryText}</div>
      <ul className="space-y-1 border-l border-zinc-200 dark:border-zinc-800">
        {headings.map((h) => (
          <li key={h.id}>
            <button
              className={clsx(
                'group flex w-full items-center gap-2 px-3 py-1.5 text-left transition-colors',
                activeId === h.id
                  ? 'text-zinc-700 dark:text-zinc-200 font-semibold'
                  : 'text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100'
              )}
              style={{ WebkitTapHighlightColor: 'transparent' }}
              onClick={() => handleClick(h.id)}
            >
              <span className="truncate">{h.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  const mainRef = useRef<HTMLElement>(null)
  const locale = useLocale()

  const licenseText = locale === 'zh'
    ? '本文内容采用'
    : 'This work is licensed under'
  const licenseSuffix = locale === 'zh'
    ? '协议进行许可。'
    : '.'

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />

      <div className="absolute right-4 top-24">
        <CopyButton />
      </div>
      <div className="relative max-w-5xl mx-auto w-full mt-24 pb-20 px-4">
        {/* 固定居中的目录，不影响内容宽度 */}
        <div className="hidden lg:block fixed z-30 top-1/2 -translate-y-1/2"
          style={{
            left: `calc(50vw - 640px - 12px)`, // 12px为内容区与目录的间距
          }}>
          <BlogTOC containerRef={mainRef} />
        </div>
        {/* 主体内容不再有 ml-xx，宽度与无目录时一致 */}
        <main
          ref={mainRef}
          className="prose prose-gray flex-1 dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium"
        >
          {children}
        </main>
        {/* 协议标志（多语言+图标） */}
        <footer className="mt-12 text-center text-xs text-zinc-500 dark:text-zinc-400">
          {licenseText}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
            target="_blank"
            rel="license noopener noreferrer"
            style={{ display: 'inline-block' }}
            className="underline mx-1"
          >
            CC BY-NC-SA 4.0
          </a>
          {licenseSuffix}
        </footer>
      </div>
    </>
  )
}
