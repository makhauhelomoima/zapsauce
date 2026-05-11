'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ZapSauceHome() {
  const searchParams = useSearchParams()
  const [ref, setRef] = useState('')
  const whatsappNumber = "26657031600" // Fixed: Full Lesotho number

  useEffect(() => {
    const refParam = searchParams.get('ref')
    if (refParam) setRef(refParam)
  }, [searchParams])

  const originLink = `https://wa.me/26657031600?text=Hi%20Queen%2C%20I%20want%20Zap%20Sauce%20ORIGIN%20M150.%20Send%20payment%20details%20🥄🍯⚡${ref? `%20Ref:%20${ref}` : ''}`

  const fireballLink = `https://wa.me/26657031600?text=Hi%20Queen%2C%20I%20want%20Zap%20Sauce%20FIREBALL%20M200.%20Send%20payment%20details%20🌶️💥${ref? `%20Ref:%20${ref}` : ''}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-100">

      {/* TOP NAV - ADMIN + LOGIN */}
      <div className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-emerald-200 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-bold text-emerald-950">🔥 Zap Sauce™</Link>
          <div className="flex gap-4">
            <Link href="/login" className="text-sm text-emerald-700 hover:text-emerald-900 font-medium">
              Affiliate Login
            </Link>
            <Link href="/admin" className="text-sm bg-emerald-700 text-white px-3 py-1 rounded-lg hover:bg-emerald-800 font-medium">
              👑 Admin
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 pt-24 pb-24">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="text-7xl mb-4">🔥</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-emerald-950">Zap Sauce™</h1>
          <p className="text-2xl text-emerald-800 mb-4 font-medium">Lightning in a Jar</p>
          <p className="text-lg text-emerald-700">Two Signature Flavors. Good health Sauces. Lesotho Made.</p>
          <p className="text-sm text-emerald-600 mt-2">Maseru, Lesotho 🇱🇸</p>
          {ref && (
            <div className="mt-4 inline-block bg-emerald-200 text-emerald-900 px-4 py-2 rounded-lg text-sm font-medium">
              Referred by: {ref} 🔥
            </div>
          )}
        </div>

        {/* FLAVORS - 2 PRODUCTS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* ORIGIN - M150 PER PDF */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-emerald-400 hover:scale-105 transition duration-300">
            <div className="text-center">
              <div className="text-6xl mb-4">🥄🍯⚡</div>
              <h2 className="text-3xl font-bold mb-4 text-emerald-900">ORIGIN</h2>
              <p className="text-emerald-700 mb-2 font-medium">The Classic Recipe</p>
              <p className="text-5xl font-bold mb-6 text-emerald-950">M150 per pdf</p>
              <p className="text-sm text-emerald-600 mb-6">1 tsp daily. Original Zap Sauce™ formula. Digital PDF recipe + health guide. A4 download.</p>
              <a
                href={originLink}
                target="_blank"
                className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 w-full shadow-lg"
              >
                Order ORIGIN via WhatsApp →
              </a>
            </div>
          </div>

          {/* FIREBALL - M200 PER PDF */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-red-500 hover:scale-105 transition duration-300">
            <div className="text-center">
              <div className="text-6xl mb-4">🌶️💥</div>
              <h2 className="text-3xl font-bold mb-4 text-red-900">FIREBALL</h2>
              <p className="text-red-700 mb-2 font-medium">Extra Heat. Extra Power.</p>
              <p className="text-5xl font-bold mb-6 text-red-950">M200 per pdf</p>
              <p className="text-sm text-red-600 mb-6">1 tsp daily. Spicy upgrade for warriors. Digital PDF recipe + health guide. A4 download.</p>
              <a
                href={fireballLink}
                target="_blank"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-red-700 w-full shadow-lg"
              >
                Order FIREBALL via WhatsApp →
              </a>
            </div>
          </div>

        </div>

        {/* AFFILIATE CTA */}
        <div className="bg-gradient-to-r from-emerald-900 to-gray-900 text-white rounded-2xl p-12 text-center mb-16 shadow-2xl border border-emerald-500">
          <h3 className="text-3xl font-bold mb-4 text-emerald-400">EARN 30% COMMISSION</h3>
          <p className="text-xl mb-2">M45 per ORIGIN M150 sale</p>
          <p className="text-xl mb-8">M60 per FIREBALL M200 sale</p>
          <p className="mb-8 text-gray-300">Share your link. Earn per sale. Weekly M-Pesa payouts. Minimum: M225.</p>
          <Link href="/affiliate" className="inline-block bg-emerald-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-400 shadow-lg">
            Join Affiliate Program →
          </Link>
        </div>

        {/* MIGRATION BANNER */}
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-xl mb-16 shadow-md">
          <p className="font-bold text-lg mb-2 text-emerald-900">Looking for the old M250 Zap Sauce PDF?</p>
          <p className="text-emerald-800">We've upgraded! Choose <strong>ORIGIN M150</strong> for the classic or <strong>FIREBALL M200</strong> for extra heat. Same lightning, more choice 🔥</p>
        </div>

        {/* FOOTER */}
        <div className="text-center text-emerald-700 text-sm">
          <p className="mb-2">© 2026 Zap Sauce™</p>
          <p>Lightning in a Jar. Healthy Immune Systems. 🇱🇸🔥</p>
        </div>

      </div>

      {/* FLOATING WHATSAPP */}
      <a
        href={`https://wa.me/26657031600?text=Hi%20Queen%2C%20I%20need%20help%20with%20Zap%20Sauce%20🔥${ref? `%20Ref:%20${ref}` : ''}`}
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50"
        aria-label="Customer Support WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

    </div>
  )
}