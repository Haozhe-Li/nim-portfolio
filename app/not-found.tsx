import Link from 'next/link'
import { TextMorph } from '@/components/ui/text-morph'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-950 px-4">
      <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        404
      </h1>
      <TextMorph className="text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-8">
        Not Found
      </TextMorph>
      <Link
        href="/"
        className="rounded-lg bg-zinc-900 px-4 py-2 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-200"
      >
        Go to Home
      </Link>
    </div>
  )
}
