import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

type Locale = 'en' | 'zh'

const SUPPORTED: Locale[] = ['en', 'zh']
const LOCALE_HEADER = 'x-locale-override'
const LOCALE_COOKIE = 'locale'
const LOCALE_PREFIX = /^\/(en|zh)(?=\/|$)/i

function normalizeLocale(value?: string | null): Locale | null {
  if (!value) return null
  const normalized = value.toLowerCase()
  return (
    (SUPPORTED.find((locale) => normalized.startsWith(locale)) as
      | Locale
      | undefined) || null
  )
}

export function middleware(request: NextRequest) {
  const { nextUrl } = request
  const searchParams = nextUrl.searchParams
  let determinedLocale: Locale | null = null

  const langParam = searchParams.get('lang') || searchParams.get('locale')
  const paramLocale = normalizeLocale(langParam)
  if (paramLocale) {
    determinedLocale = paramLocale
  }

  const prefixMatch = nextUrl.pathname.match(LOCALE_PREFIX)
  if (!determinedLocale && prefixMatch) {
    determinedLocale = normalizeLocale(prefixMatch[1])
  }

  if (!determinedLocale) {
    return NextResponse.next()
  }

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set(LOCALE_HEADER, determinedLocale)

  if (prefixMatch) {
    const url = request.nextUrl.clone()
    url.pathname = nextUrl.pathname.replace(LOCALE_PREFIX, '') || '/'
    const response = NextResponse.redirect(url)
    response.cookies.set(LOCALE_COOKIE, determinedLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
    return response
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.cookies.set(LOCALE_COOKIE, determinedLocale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  })

  return response
}

export const config = {
  matcher: ['/:path*'],
}
