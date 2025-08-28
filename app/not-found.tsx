'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { TextMorph } from '@/components/ui/text-morph'
import { useTranslation } from '@/lib/i18n'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const t = useTranslation()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-950 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <motion.h1
          className="text-8xl md:text-9xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.h1>

        <TextMorph
          className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400 mb-2 max-w-md"
        >
          {t.notFound?.title || 'Page Not Found'}
        </TextMorph>

        <motion.p
          className="text-sm md:text-base text-zinc-500 dark:text-zinc-500 mb-8 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t.notFound?.description || 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium transition-all duration-200 hover:bg-zinc-700 dark:hover:bg-zinc-200 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.notFound?.backHome || 'Back to Home'}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
