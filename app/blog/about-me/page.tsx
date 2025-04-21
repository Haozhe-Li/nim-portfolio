"use client"
import { useLocale } from '@/lib/locale-context'
import dynamic from 'next/dynamic'

const ZH = dynamic(() => import('./page.zh.mdx'))
const EN = dynamic(() => import('./page.mdx'))

export default function AboutMePage() {
  const locale = useLocale()
  // 优先中文，无则英文
  if (locale === 'zh') {
    return <ZH />
  }
  return <EN />
}
