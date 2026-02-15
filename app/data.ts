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
    name: { en: 'Omni Knows Neo', zh: '奥秘尽知 Neo' },
    description: {
      en: 'Deep Research, writing Answers into the Unknown',
      zh: '深度探索，在青色的未知里把答案写进画布',
    },
    link: '/blog/omniknows-neo',
    video: 'https://cdn.haozheli.com/omniknows-neo.mp4',
    thumbnail: 'https://cdn.haozheli.com/omni-landing-cover.webp',
    id: 'project1',
  },
  {
    name: { en: 'Pictures', zh: '智能相册' },
    description: {
      en: 'An AI-powered gallery for photographers.',
      zh: '为摄影师打造的AI智能相册',
    },
    link: '/blog/pictures',
    video: 'https://cdn.haozheli.com/pictures-home.mp4',
    thumbnail: 'https://cdn.haozheli.com/pictures-thumb.webp',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: {
      en: 'University of Illinois CS 101 Course',
      zh: '伊利诺伊大学 CS101课程',
    },
    title: { en: 'Course Assistant', zh: '课程助理' },
    start: '2026.1',
    end: '',
    link: 'https://siebelschool.illinois.edu/',
    id: 'work6',
  },
  {
    company: {
      en: 'U of I Grainger College of Engineering',
      zh: '伊利诺伊大学格兰杰工程学院',
    },
    title: { en: 'AI Engineer (Part-time)', zh: 'AI工程师（兼职）' },
    start: '2025.10',
    end: '',
    link: 'https://grainger.illinois.edu',
    id: 'work5',
  },
  {
    company: { en: 'Illinois Math Lab', zh: '伊利诺伊大学数学实验室' },
    title: { en: 'Software Engineer (Part-time)', zh: '软件工程师（兼职）' },
    start: '2025.8',
    end: '2025.12',
    link: 'https://illinois.edu',
    id: 'work1',
  },
  {
    company: { en: 'Huawei', zh: '华为' },
    title: { en: 'AI Engineer Intern', zh: 'AI工程师实习' },
    start: '2025.5',
    end: '2025.8',
    link: 'https://www.huawei.com',
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
    company: {
      en: 'University of Illinois CS 124 Course',
      zh: '伊利诺伊大学 CS124课程',
    },
    title: { en: 'Course Assistant', zh: '课程助理' },
    start: '2023.1',
    end: '2023.5',
    link: 'https://cs124.org',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: {
      en: 'Introducing Omni Knows Neo: Writing Answers into the Unknown',
      zh: '奥秘尽知 Neo：在青色的未知里，把答案写进画布',
    },
    description: {
      en: 'A new UI, smarter personalization, progressive skills, and canvas for Neo.',
      zh: 'Neo 的新 UI、更智能的个性化、渐进式技能和画布。',
    },
    link: '/blog/omniknows-neo',
    uid: 'blog-5',
  },
  {
    title: {
      en: 'Introducing Pictures: An AI-Powered Gallery for Photographers',
      zh: 'Pictures：面向摄影师的 AI 智能作品画廊',
    },
    description: {
      en: 'An AI-powered gallery for photographers, featuring hybrid embeddings, multi-layer caching, and a distributed architecture.',
      zh: '为摄影师打造的 AI 智能相册，特色功能包括混合嵌入、多层缓存设计与分布式架构。',
    },
    link: '/blog/pictures',
    uid: 'blog-4',
  },
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
      en: 'Omni is a search engine that knows everything.',
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
      zh: '一个基于python的优雅的AI内容分类器：项目架构与核心概念。',
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
