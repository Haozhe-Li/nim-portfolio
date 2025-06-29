import createMDX from '@next/mdx';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withMDX(nextConfig);

