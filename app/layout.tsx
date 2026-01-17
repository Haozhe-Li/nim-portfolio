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
    description: 'AI enthusiast / Full-stack / Product / ...',
    contentLanguage: 'en-US',
  },
  zh: {
    title: '李浩哲',
    description: 'AI 爱好者 / 全栈 / 产品 / ...',
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
