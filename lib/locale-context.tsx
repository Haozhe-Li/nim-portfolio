"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Locale = 'en' | 'zh'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

interface LocaleProviderProps {
  children: React.ReactNode
  initialLocale: Locale
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => { },
})

const LOCALE_STORAGE_KEY = 'locale'
const LOCALE_COOKIE = 'locale'

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children, initialLocale }) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)

  useEffect(() => {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
    if (saved && saved !== locale) {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = useMemo(() => {
    return (newLocale: Locale) => {
      setLocaleState(newLocale)
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
      document.cookie = `${LOCALE_COOKIE}=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export const useLocale = () => useContext(LocaleContext).locale
export const useSetLocale = () => useContext(LocaleContext).setLocale