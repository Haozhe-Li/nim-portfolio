type Project = {
  name: string
  description: string
  link: string
  video: string
  thumbnail: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
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
    name: 'Chat Syllabus',
    description:
      'Know better about your courses with AI.',
    link: 'https://chatsyllabus.xyz/',
    video:
      'https://cdn.haozheli.com/chatsyllabus.mp4',
    thumbnail: 'https://cdn.haozheli.com/chatsyllabus.webp',
    id: 'project1',
  },
  {
    name: 'Omni Knows XYZ',
    description: 'A smart search engine like never before.',
    link: 'https://omniknows.xyz/',
    video:
      'https://cdn.haozheli.com/omniknowsxyz.mp4',
    thumbnail: 'https://cdn.haozheli.com/omniknowsxyz.webp',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Huawei',
    title: 'Incoming AI/ML Engineer Intern',
    start: '2025.5',
    end: 'Present',
    link: 'https://huawei.com',
    id: 'work1',
  },
  {
    company: 'Chat Syllabus',
    title: 'Start-up Founder',
    start: '2024.8',
    end: 'Present',
    link: 'https://chatsyllabus.xyz',
    id: 'work2',
  },
  {
    company: 'RPGGO.AI',
    title: 'AI Engineer Intern',
    start: '2024.5',
    end: '2024.8',
    link: 'https://rpggo.ai',
    id: 'work3',
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
