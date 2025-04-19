import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },

    Video: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <div className="relative">
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-video w-full cursor-zoom-in rounded-xl"
          />
        </div>
      )
    },
    Highlight: ({
      children,
    }: {
      children: React.ReactNode
    }) => (
      <div className="my-4 rounded-xl bg-zinc-50 py-3 px-4 text-zinc-800 shadow-sm dark:bg-zinc-800/40 dark:text-zinc-200">
        <div>{children}</div>
      </div>
    ),
  }
}
