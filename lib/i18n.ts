import { useLocale } from '@/lib/locale-context'

export type Locale = 'en' | 'zh'

const translations: Record<Locale, Record<string, any>> = {
  en: {
    header: {
        name: 'Haozhe Li',
      tagline: 'AI enthusiast / Full-stack / Product / ...',
    },
    footer: {
      copy1: '© 2025 Haozhe Li.',
      copy2: 'Inspired by Nim.',
    },
    language: {
      en: 'EN',
      zh: '中',
    },
    home: {
      description: 'Focused on leveraging AI into daily life. Bridging the gap between thoughts and engineering.',
      selectedProjects: 'Selected Projects',
      workExperience: 'Work Experience',
      blog: 'Blog',
      connect: 'Connect',
      contactLine: 'Feel free to contact me at',
    },
  },
  zh: {
    header: {
        name: '李浩哲',
      tagline: 'AI enthusiast / Full-stack / Product / ...',
    },
    footer: {
      copy1: '© 2025 李浩哲。',
      copy2: '灵感来自 Nim。',
    },
    language: {
        en: 'EN',
        zh: '中',
      },
    home: {
      description: '专注于将 AI 应用于日常生活，架起思想与工程之间的桥梁。',
      selectedProjects: '精选项目',
      workExperience: '工作经验',
      blog: '博客',
      connect: '联系',
      contactLine: '欢迎通过以下邮箱联系我：',
    },
  },
}

export function useTranslation() {
  const locale = useLocale() as Locale
  return translations[locale]
}