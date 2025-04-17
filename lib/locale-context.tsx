"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

export type Locale = 'en' | 'zh'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
})

export const LocaleProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale
    if (saved) {
      setLocaleState(saved)
    } else {
      const nav = navigator.language.startsWith('zh') ? 'zh' : 'en'
      setLocaleState(nav)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export const useLocale = () => useContext(LocaleContext).locale
export const useSetLocale = () => useContext(LocaleContext).setLocale