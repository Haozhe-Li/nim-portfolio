import type { Locale } from '@/lib/i18n'
import { cookies, headers } from 'next/headers'

export const SUPPORTED_LOCALES: Locale[] = ['en', 'zh']
export const DEFAULT_LOCALE: Locale = 'en'
export const LOCALE_COOKIE_NAME = 'locale'
export const LOCALE_HEADER_NAME = 'x-locale-override'

function normalizeLocale(value?: string | null): Locale | null {
  if (!value) return null
  const normalized = value.toLowerCase()
  if (normalized.startsWith('zh')) return 'zh'
  if (normalized.startsWith('en')) return 'en'
  return null
}

export async function getRequestLocale(): Promise<Locale> {
  const headerList = await headers()
  const cookieStore = await cookies()

  const override = normalizeLocale(headerList.get(LOCALE_HEADER_NAME))
  if (override) return override

  const cookieLocale = normalizeLocale(
    cookieStore.get(LOCALE_COOKIE_NAME)?.value,
  )
  if (cookieLocale) return cookieLocale

  const acceptLanguage = headerList.get('accept-language')
  if (acceptLanguage) {
    const candidates = acceptLanguage
      .split(',')
      .map((entry) => entry.split(';')[0]?.trim())
      .filter(Boolean)

    for (const candidate of candidates) {
      const normalized = normalizeLocale(candidate)
      if (normalized) {
        return normalized
      }
    }
  }

  return DEFAULT_LOCALE
}
