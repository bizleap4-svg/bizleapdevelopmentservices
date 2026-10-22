import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto');
  const { pathname, search } = request.nextUrl;

  const isBareDomain = host === 'bizdevelopment.in';
  const isHttp = proto === 'http';

  // 1. Redirect bare domain or http requests to https://www.bizdevelopment.in (strip trailing slash in single hop)
  if (isBareDomain || isHttp) {
    const cleanPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.replace(/\/+$/, '') : pathname;
    const targetUrl = new URL(`${cleanPath}${search}`, 'https://www.bizdevelopment.in');
    return NextResponse.redirect(targetUrl, 301);
  }

  // 2. Enforce trailing slash removal (except root /)
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const cleanPath = pathname.replace(/\/+$/, '');
    const cleanUrl = new URL(`${cleanPath}${search}`, request.url);
    return NextResponse.redirect(cleanUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - static asset files with common extensions
     */
    '/((?!_next/static|_next/image|favicon\\.ico|icon\\.png|.*\\.(?:svg|png|jpg|jpeg|webp|mp4|xml|txt)).*)',
  ],
};
