import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// 🔥 ADMIN EMAIL LOCKED: Only you can access /admin
const ADMIN_EMAIL = 'makhauhelomoima@gmail.com'

export async function middleware(req: NextRequest) {
  let res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          req.cookies.set({
            name,
            value,
            ...options,
          })
          res = NextResponse.next({
            request: {
              headers: req.headers,
            },
          })
          res.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          req.cookies.set({
            name,
            value: '',
            ...options,
          })
          res = NextResponse.next({
            request: {
              headers: req.headers,
            },
          })
          res.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

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
    if (session.user.email === ADMIN_EMAIL) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
  }

  // 3. SMART REDIRECT FROM /login after successful login
  if (req.nextUrl.pathname === '/login' && session) {
    if (session.user.email === ADMIN_EMAIL) {
      return NextResponse.redirect(new URL('/admin', req.url))
    }
    return NextResponse.redirect(new URL('/portal', req.url))
  }

  return res
}

export const config = {
  matcher: ['/admin/:path*', '/login', '/portal/:path*']
}