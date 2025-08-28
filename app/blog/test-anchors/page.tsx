"use client"
import { useLocale } from '@/lib/locale-context'
import dynamic from 'next/dynamic'

const MDX = dynamic(() => import('./page.mdx'))

export default function TestAnchorsPage() {
    return <MDX />
}
