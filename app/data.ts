type Project = {
  name: { en: string; zh: string }
  description: { en: string; zh: string }
  link: string
  video: string
  thumbnail: string
  id: string
}

type WorkExperience = {
  company: { en: string; zh: string }
  title: { en: string; zh: string }
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: { en: string; zh: string }
  description: { en: string; zh: string }
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: { en: 'Chat Syllabus', zh: 'Chat Syllabus' },
    description: {
      en: 'Know better about your courses with AI.',
      zh: '用 AI 更好地了解你的课程。',
    },
    link: '/blog/chatsyllabus',
    video: 'https://cdn.haozheli.com/chatsyllabus.mp4',
    thumbnail: 'https://cdn.haozheli.com/project2.webp',
    id: 'project1',
  },
  {
    name: { en: 'Omni Knows XYZ', zh: '奥秘尽知' },
    description: {
      en: 'A smart search engine like never before.',
      zh: '前所未有的智能搜索引擎。',
    },
    link: '/blog/omniknowsxyz',
    video: 'https://cdn.haozheli.com/omniknowsxyz.mp4',
    thumbnail: 'https://cdn.haozheli.com/project1.webp',
    id: 'project2',
  },
  {
    name: { en: 'Zero AI Detector', zh: 'Zero AI 检测器' },
    description: {
      en: 'Smart AI content detector.',
      zh: '智能的AI内容检测器。',
    },
    link: '/blog/zeroai',
    video: 'https://cdn.haozheli.com/zeroai.mp4',
    thumbnail: 'https://cdn.haozheli.com/project3.webp',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: { en: 'Huawei', zh: '华为' },
    title: { en: 'AI Engineer Intern', zh: 'AI工程师实习' },
    start: '2025.5',
    end: '2025.8',
    link: 'https://www.huawei.com',
    id: 'work1',
  },
  {
    company: { en: 'Chat Syllabus', zh: 'Chat Syllabus' },
    title: { en: 'Start-up Founder', zh: '初创公司创始人' },
    start: '2024.8',
    end: '',
    link: 'https://chatsyllabus.xyz',
    id: 'work2',
  },
  {
    company: { en: 'RPGGO.AI', zh: 'RPGGO.AI' },
    title: { en: 'AI Engineer Intern', zh: 'AI工程师实习' },
    start: '2024.5',
    end: '2024.8',
    link: 'https://rpggo.ai',
    id: 'work3',
  },
  {
    company: { en: 'University of Illinois', zh: '伊利诺伊大学' },
    title: { en: 'Course Assistant', zh: '课程助理' },
    start: '2023.1',
    end: '2023.5',
    link: 'https://illinois.edu',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: {
      en: 'Behind Chat Syllabus: Building a Smart Course Assistant',
      zh: 'Chat Syllabus 背后的故事：打造智能课程助手',
    },
    description: {
      en: 'How I built Chat Syllabus, and what I learned along the way.',
      zh: '如何打造 Chat Syllabus，以及我的收获与思考。',
    },
    link: '/blog/chatsyllabus',
    uid: 'blog-1',
  },
  {
    title: {
      en: 'Behind Omni Knows XYZ: Bringing AI to Search Engines',
      zh: 'Omni Knows XYZ 背后的故事：用AI革新搜索引擎',
    },
    description: {
      en: 'Omni is a search engine that knows from x to y to z.',
      zh: 'Omni 是一个无所不知的智能搜索引擎。',
    },
    link: '/blog/omniknowsxyz',
    uid: 'blog-2',
  },
  {
    title: {
      en: 'Zero AI Project Architecture and Core Concepts',
      zh: 'Zero AI 项目架构与核心概念',
    },
    description: {
      en: 'A graceful AI content classifier project architecture and core concepts based on Python.',
      zh: '一个优雅基于python的AI内容分类器项目架构与核心概念。',
    },
    link: '/blog/zeroai',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Haozhe-Li',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/haozheli/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/haozheli04/',
  },
]

export const EMAIL = 'mail@haozheli.com'
