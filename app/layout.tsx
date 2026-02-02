import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { LocaleProvider } from '@/lib/locale-context'
import { Analytics } from '@vercel/analytics/next'
import { getRequestLocale } from '@/lib/request-locale'
import type { Locale } from '@/lib/i18n'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const SITE_URL = 'https://haozhe.li'

const LOCALE_METADATA: Record<Locale, { title: string; description: string; contentLanguage: string }> = {
  en: {
    title: 'Haozhe Li',
    description: 'Haozhe Li - UIUC Student, AI Enthusiast, Full-stack Developer, and Product Designer. Portfolio showcasing innovative projects and technical blog posts.',
    contentLanguage: 'en-US',
  },
  zh: {
    title: '李浩哲',
    description: '李浩哲 - UIUC 学生，AI 爱好者，全栈开发者，产品设计师。展示创新项目与技术博客。',
    contentLanguage: 'zh-CN',
  },
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  const meta = LOCALE_METADATA[locale]

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: SITE_URL,
      languages: {
        en: SITE_URL,
        zh: `${SITE_URL}?lang=zh`,
      },
    },
    other: {
      'Content-Language': meta.contentLanguage,
    },
  }
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getRequestLocale()
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Haozhe Li',
              alternateName: '李浩哲',
              url: 'https://haozhe.li',
              jobTitle: 'Software Engineer',
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'University of Illinois Urbana-Champaign',
                sameAs: 'https://illinois.edu'
              },
              sameAs: [
                'https://github.com/Haozhe-Li',
                'https://www.linkedin.com/in/haozheli/',
                'https://www.instagram.com/haozheli04/',
              ],
            }),
          }}
        />
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <LocaleProvider initialLocale={locale}>
            <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
              <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
