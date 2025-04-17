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
  title: string
  description: string
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
    link: 'https://chatsyllabus.xyz/',
    video: 'https://cdn.haozheli.com/chatsyllabus.mp4',
    thumbnail: 'https://cdn.haozheli.com/chatsyllabus.webp',
    id: 'project1',
  },
  {
    name: { en: 'Omni Knows XYZ', zh: '奥秘尽知' },
    description: {
      en: 'A smart search engine like never before.',
      zh: '前所未有的智能搜索引擎。',
    },
    link: 'https://omniknows.xyz/',
    video: 'https://cdn.haozheli.com/omniknowsxyz.mp4',
    thumbnail: 'https://cdn.haozheli.com/omniknowsxyz.webp',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: { en: 'Huawei', zh: '华为' },
    title: { en: 'Incoming AI/ML Engineer Intern', zh: 'AI/ML 实习工程师（待入职）' },
    start: '2025.5',
    end: 'Present',
    link: 'https://huawei.com',
    id: 'work1',
  },
  {
    company: { en: 'Chat Syllabus', zh: 'Chat Syllabus' },
    title: { en: 'Start-up Founder', zh: '初创公司创始人' },
    start: '2024.8',
    end: 'Present',
    link: 'https://chatsyllabus.xyz',
    id: 'work2',
  },
  {
    company: { en: 'RPGGO.AI', zh: 'RPGGO.AI' },
    title: { en: 'AI Engineer Intern', zh: 'AI 实习工程师' },
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
    title: 'About Me, My Work, and My Journey',
    description: 'A brief introduction to my work and my journey so far.',
    link: '/blog/about-me',
    uid: 'blog-1',
  },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
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
