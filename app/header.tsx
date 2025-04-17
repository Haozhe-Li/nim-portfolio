'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { useTranslation } from '@/lib/i18n'

export function Header() {
  const t = useTranslation()
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
        {t.header.name}
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          {t.header.tagline}
        </TextEffect>
      </div>
    </header>
  )
}
