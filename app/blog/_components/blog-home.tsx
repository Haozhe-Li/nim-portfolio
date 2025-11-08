"use client"

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Search as SearchIcon } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'
import { useTranslation } from '@/lib/i18n'

export type BlogPostSummary = {
    slug: string
    title: {
        en: string
        zh: string
    }
}

export function BlogHome({ posts }: { posts: BlogPostSummary[] }) {
    const locale = useLocale()
    const t = useTranslation()
    const copy = t.blogHome || {}
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)

    const filtered = useMemo(() => {
        const keyword = query.trim().toLowerCase()
        if (!keyword) {
            return posts
        }
        return posts.filter((post) => {
            const candidates = [post.slug, post.title.en, post.title.zh]
            return candidates.some((value) => value.toLowerCase().includes(keyword))
        })
    }, [posts, query])

    useEffect(() => {
        setPage(1)
    }, [query])

    useEffect(() => {
        setPage(1)
    }, [posts])

    const totalPages = Math.max(1, Math.ceil(filtered.length / 10))
    const currentPage = Math.min(page, totalPages)
    const paginated = filtered.slice((currentPage - 1) * 10, currentPage * 10)

    const formatText = (template?: string, values: Record<string, number> = {}) => {
        if (!template) return ''
        return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''))
    }

    return (
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 py-10 sm:py-12">
            <header className="space-y-1.5">
                <div className="inline-flex items-center rounded-full border border-zinc-200/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-zinc-500 dark:border-zinc-800/80 dark:text-zinc-400">
                    {copy.title ?? 'Blog'}
                </div>
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {copy.subtitle ?? 'Stories, projects, and ideas.'}
                </h1>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {copy.description ??
                        'Browse every published story. Titles are pulled directly from each Markdown file.'}
                </p>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
                    {formatText(copy.total, { count: filtered.length }) ||
                        `Total ${filtered.length} posts`}
                </p>
            </header>

            <div className="relative">
                <label htmlFor="blog-search" className="sr-only">
                    {copy.searchLabel ?? 'Search posts'}
                </label>
                <div className="relative">
                    <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                        id="blog-search"
                        type="search"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={copy.searchPlaceholder ?? 'Search posts'}
                        className="w-full rounded-full border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-600 dark:focus:ring-zinc-800"
                    />
                </div>
            </div>

            <section className="space-y-3">
                {paginated.length > 0 ? (
                    paginated.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group flex items-center justify-between rounded-2xl border border-zinc-200/80 bg-white px-5 py-4 text-sm transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800/70 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                        >
                            <span className="font-medium text-zinc-900 transition group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-200">
                                {post.title[locale] ?? post.title.en}
                            </span>
                        </Link>
                    ))
                ) : (
                    <p className="rounded-2xl border border-dashed border-zinc-300/80 bg-zinc-50 px-5 py-6 text-center text-sm text-zinc-500 dark:border-zinc-700/70 dark:bg-zinc-900 dark:text-zinc-400">
                        {copy.empty ?? 'No posts matched your search.'}
                    </p>
                )}
            </section>

            {paginated.length > 0 && totalPages > 1 && (
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                    <button
                        type="button"
                        onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                        className="rounded-full border border-zinc-200 px-3 py-1 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                        disabled={currentPage === 1}
                    >
                        ←
                    </button>
                    <span>
                        {formatText(copy.page, { current: currentPage, total: totalPages }) ||
                            `Page ${currentPage} of ${totalPages}`}
                    </span>
                    <button
                        type="button"
                        onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
                        className="rounded-full border border-zinc-200 px-3 py-1 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
                        disabled={currentPage === totalPages}
                    >
                        →
                    </button>
                </div>
            )}
        </div>
    )
}
