import React, { useState } from 'react'
import type { MDXComponents } from 'mdx/types'

// 生成标题ID的辅助函数
function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5\s]+/gi, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// 链接图标组件
function LinkIcon({ id }: { id: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
      title={copied ? "已复制链接!" : "复制链接"}
      aria-label="复制标题链接"
    >
      {copied ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.06 0 2.07.19 3.01.54" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

// 创建标题组件的工厂函数
function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Component = ({ children, ...props }: { children: React.ReactNode }) => {
    const textContent = typeof children === 'string' ? children :
      React.Children.toArray(children).join('')
    const id = generateId(textContent)

    const headingProps = { ...props, id, className: 'group flex items-center' }

    const content = (
      <>
        <span>{children}</span>
        <LinkIcon id={id} />
      </>
    )

    switch (level) {
      case 1: return <h1 {...headingProps}>{content}</h1>
      case 2: return <h2 {...headingProps}>{content}</h2>
      case 3: return <h3 {...headingProps}>{content}</h3>
      case 4: return <h4 {...headingProps}>{content}</h4>
      case 5: return <h5 {...headingProps}>{content}</h5>
      case 6: return <h6 {...headingProps}>{content}</h6>
    }
  }
  Component.displayName = `Heading${level}`
  return Component
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },

    Video: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <div className="relative">
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full cursor-zoom-in rounded-xl"
          />
        </div>
      )
    },
    Highlight: ({
      children,
    }: {
      children: React.ReactNode
    }) => (
      <div className="my-4 rounded-xl bg-zinc-50 py-3 px-4 text-zinc-800 shadow-sm dark:bg-zinc-800/40 dark:text-zinc-200">
        <div>{children}</div>
      </div>
    ),
  }
}
