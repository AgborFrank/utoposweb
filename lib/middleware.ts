import { NextResponse } from 'next/server';
/* eslint-disable  @typescript-eslint/no-explicit-any */
export function middleware(request: any) {
  const url = request.nextUrl.clone();
  const role = request.cookies.get('role')?.value;

  if (url.pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (url.pathname.startsWith('/driver') && role !== 'driver') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  if (url.pathname.startsWith('/rider') && role !== 'rider') {
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}
