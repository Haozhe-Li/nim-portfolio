import { useLocale } from '@/lib/locale-context'

export type Locale = 'en' | 'zh'

const translations: Record<Locale, Record<string, any>> = {
  en: {
    header: {
      name: 'Haozhe Li',
      tagline: 'AI enthusiast / Full-stack / Product / ...',
      about: 'About',
      resume: 'CV',
      resumeURL: 'https://cdn.haozheli.com/HaozheLi_Resume.pdf',
    },
    footer: {
      copy1: '© 2025 Haozhe Li.',
      copy2: 'Shipped with AI and love.',
    },
    language: {
      en: 'EN',
      zh: '中',
    },
    home: {
      description:
        'Focused on leveraging AI into daily life. Bridging the gap between thoughts and engineering.',
      selectedProjects: 'Selected Projects',
      workExperience: 'Work Experience',
      blog: 'Blog',
      connect: 'Connect',
      contactLine: 'Feel free to contact me at',
    },
    notFound: {
      title: 'Page Not Found',
      description:
        'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
      backHome: 'Back to Home',
    },
  },
  zh: {
    header: {
      name: '李浩哲',
      tagline: 'AI enthusiast / Full-stack / Product / ...',
      about: '关于我',
      resume: '简历',
      resumeURL: 'https://cdn.haozheli.com/HaozheLi_Resume_zh.pdf',
    },
    footer: {
      copy1: '© 2025 李浩哲。',
      copy2: '用爱与AI构建。',
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
    notFound: {
      title: '页面未找到',
      description: '您访问的页面可能已被删除、更名或暂时不可用。',
      backHome: '返回首页',
    },
  },
}

export function useTranslation() {
  const locale = useLocale() as Locale
  return translations[locale]
}
