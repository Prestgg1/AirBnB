import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export const middleware = (request) => {
  return createMiddleware(routing)(request);
};

export const config = {
  matcher: ['/', '/(az|en)/:path*', '/((?!api|_next|_vercel|admin|.*\\..*).*)', '/([\\w-]+)?/users/(.+)']
};