import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  // 匹配 /zh, /en, /zh-cn（忽略大小写和结尾斜杠）
  if (/^\/(zh|en|zh-cn)\/?$/i.test(pathname)) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

// 匹配的路径
export const config = {
  matcher: ['/zh', '/en', '/zh-cn', '/zh/', '/en/', '/zh-cn/'],
}
