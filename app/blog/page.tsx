import fs from 'node:fs'
import path from 'node:path'
import { BlogHome, type BlogPostSummary } from './_components/blog-home'

const BLOG_DIR = path.join(process.cwd(), 'app', 'blog')

function extractTitle(filePath: string) {
    try {
        const raw = fs.readFileSync(filePath, 'utf8')
        const match = raw.match(/^\s*#\s+(.+)$/m)
        return match ? match[1].trim() : null
    } catch (error) {
        console.error(`Failed to read blog file: ${filePath}`, error)
        return null
    }
}

function collectPosts(): BlogPostSummary[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return []
    }

    const entries = fs.readdirSync(BLOG_DIR, { withFileTypes: true })

    const posts = entries
        .filter((entry) => entry.isDirectory() && !entry.name.endsWith('-n'))
        .map((entry) => {
            const slug = entry.name
            const enPath = path.join(BLOG_DIR, slug, 'page.mdx')
            if (!fs.existsSync(enPath)) {
                return null
            }

            const enTitle = extractTitle(enPath) ?? slug
            const zhPath = path.join(BLOG_DIR, slug, 'page.zh.mdx')
            const zhTitle = fs.existsSync(zhPath)
                ? extractTitle(zhPath) ?? enTitle
                : enTitle

            return {
                slug,
                title: {
                    en: enTitle,
                    zh: zhTitle,
                },
            }
        })
        .filter((post): post is BlogPostSummary => Boolean(post))
        .sort((a, b) => a.slug.localeCompare(b.slug))

    return posts
}

export default function BlogIndexPage() {
    const posts = collectPosts()
    return <BlogHome posts={posts} />
}
