import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// 🔥 ADMIN EMAIL LOCKED: Only makhauhelomoima@gmail.com can access /admin
const ADMIN_EMAIL = 'makhauhelomoima@gmail.com'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data: { session } } = await supabase.auth.getSession()

  // 1. LOCK /admin - Only Queen can enter
  if (req.nextUrl.pathname.startsWith('/admin')) {
    if (!session || session.user.email !== ADMIN_EMAIL) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  // 2. LOCK /portal - Must be logged in, but not admin
  if (req.nextUrl.pathname.startsWith('/portal')) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
    // If admin tries to access portal, send to admin dashboard
    if (session.user.email === ADMIN_EMAIL) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
  }

  // 3. SMART REDIRECT FROM /login after successful login
  if (req.nextUrl.pathname === '/login' && session) {
    // Queen goes to /admin
    if (session.user.email === ADMIN_EMAIL) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
    // Affiliates go to /portal
    return NextResponse.redirect(new URL('/portal', req.url))
  }

  return res
}

// Run middleware on these routes only
export const config = {
  matcher: ['/admin/:path*', '/login', '/portal/:path*']
}