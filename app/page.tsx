'use client'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HEADER */}
      <nav className="border-b border-gray-800 sticky top-0 bg-gray-950/80 backdrop-blur z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚡</span>
            <h1 className="text-2xl font-bold">Zap Sauce™</h1>
          </div>
          <div className="flex gap-4">
            <Link href="/affiliate" className="text-sm text-gray-400 hover:text-white transition">
              Become Affiliate
            </Link>
            <Link href="/login" className="text-sm bg-emerald-600 px-4 py-2 rounded-lg hover:bg-emerald-700 transition">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-transparent to-amber-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">Heat</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Handcrafted in Lesotho. Bold flavors. Zero compromise.
          </p>
          <Link href="/catalog" className="bg-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 transition">
            Shop Now
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>© 2026 Zap Sauce™ Empire. Proudly made in Lesotho 🇱🇸</p>
        </div>
      </footer>
    </div>
  )
}