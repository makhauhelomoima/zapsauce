'use client'
import { RECIPES } from '../data/recipes'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [showEFT, setShowEFT] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [unlockedRecipes, setUnlockedRecipes] = useState<string[]>([])

  const featuredRecipes = Object.values(RECIPES).filter(r => r.type === 'PAID' || r.type === 'SUBSCRIPTION').slice(0, 3)
  const freeRecipes = Object.values(RECIPES).filter(r => r.type === 'FREE')

  useEffect(() => {
    const unlocked: string[] = []
    Object.keys(RECIPES).forEach(id => {
      if (localStorage.getItem(`zap_unlocked_${id}`) === 'true') {
        unlocked.push(id)
      }
    })
    setUnlockedRecipes(unlocked)
  }, [])

  const handleUSSD = (ussd: string) => {
    window.location.href = `tel:${ussd}`
  }

  const copyEFT = () => {
    navigator.clipboard.writeText('Zap Sauce ZAP000')
    alert('EFT Reference copied: Zap Sauce ZAP000\n\nBank: Lesotho Post Bank\nAccount: 1036202900018\nBranch: BONHOMME\nSwift: LESHLSMMXXX')
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white">
      {/* NAV */}
      <nav className="sticky top-0 bg-black/95 backdrop-blur border-b border-[#00A651]/30 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-3xl font-black text-[#00E06D]">Zap Sauce.</Link>
          <div className="hidden md:flex items-center gap-6 text-lg">
            <Link href="/recipes" className="text-white hover:text-[#00C85F] font-bold">Recipes</Link>
            <Link href="/subscribe" className="text-yellow-400 hover:text-yellow-300 font-black">Subscribe M120</Link>
            <Link href="/admin" className="text-[#00C85F] hover:text-[#00E06D] font-bold">Admin</Link>
          </div>
          <button onClick={() => setShowMenu(!showMenu)} className="md:hidden text-[#00E06D] text-2xl">☰</button>
        </div>
        {showMenu && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#00A651]/30 pt-4">
            <Link href="/recipes" className="block py-3 text-white hover:text-[#00C85F] font-bold text-lg">Recipes</Link>
            <Link href="/subscribe" className="block py-3 text-yellow-400 hover:text-yellow-300 font-black text-lg">Subscribe M120</Link>
            <Link href="/admin" className="block py-3 text-[#00C85F] hover:text-[#00E06D] font-bold text-lg">Admin</Link>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black text-[#00E06D] mb-6 drop-shadow-[0_0_50px_rgba(0,224,109,1)]">
            Zap Sauce.
          </h1>
          <p className="text-2xl md:text-3xl text-[#00C85F] mb-4 font-black">For Considered Families. With Lightning Immune Systems.</p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-semibold max-w-3xl mx-auto">
            The complete healing system. 17 recipes. 100+ ailments cured. Product of Lesotho 🇱🇸
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/recipes"
              className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-10 py-5 rounded-2xl text-xl shadow-2xl shadow-green-500/50 border-2 border-[#00E06D] transition-all active:scale-95"
            >
              Browse 14 Recipes →
            </Link>
            <Link
              href="/subscribe"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-10 py-5 rounded-2xl text-xl shadow-2xl shadow-yellow-500/50 border-2 border-yellow-300 transition-all active:scale-95"
            >
              Subscribe M120/month
            </Link>
          </div>

          {/* FREE TEASERS */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {freeRecipes.map((recipe) => (
              <div key={recipe.id} className="border-3 border-[#00E06D] bg-black/60 backdrop-blur p-6 rounded-2xl shadow-2xl shadow-green-500/40">
                <div className="text-sm bg-[#00A651] text-white px-4 py-2 rounded-lg font-black inline-block mb-3">FREE SAMPLE</div>
                <h3 className="text-3xl font-black text-[#00E06D] mb-2">{recipe.name}</h3>
                <p className="text-gray-300 text-lg mb-4">{recipe.subtitle}</p>
                <Link
                  href={`/recipes/${recipe.id}`}
                  className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-8 py-4 rounded-xl text-lg w-full block text-center"
                >
                  View Full Recipe 🎁
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PAID RECIPES */}
      <section className="px-4 py-12 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center text-[#00E06D] mb-8">Featured Heal Recipes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="border-2 border-[#00A651]/60 bg-black/80 backdrop-blur p-6 rounded-2xl hover:border-[#00C85F] hover:shadow-2xl hover:shadow-green-500/30 transition-all">
                {recipe.type === 'SUBSCRIPTION' && (
                  <div className="text-sm bg-yellow-500 text-black px-3 py-1 rounded-md font-black inline-block mb-2">SUBSCRIPTION</div>
                )}
                <h3 className="text-2xl font-black text-[#00E06D] mb-2">{recipe.name}</h3>
                {recipe.subtitle && <p className="text-sm text-gray-400 mb-3">{recipe.subtitle}</p>}

                <div className="text-sm text-[#00C85F] mb-2 mt-3 font-bold">CURES:</div>
                <ul className="text-sm mb-4">
                  {recipe.cures.slice(0, 3).map((cure, i) => (
                    <li key={i} className="mb-1 text-gray-300 flex items-start">
                      <span className="text-[#00E06D] mr-2">✓</span>
                      <span>{cure}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-700 pt-4 mt-3">
                  <div className="flex justify-between items-end mb-3">
                    <div className="text-4xl font-black text-white">M{recipe.price}</div>
                    {recipe.ussd && <div className="text-sm text-white font-mono">{recipe.ussd}</div>}
                  </div>
                  <Link
                    href={`/recipes/${recipe.id}`}
                    className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-3 rounded-xl text-lg w-full block text-center"
                  >
                    Unlock Recipe →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-black text-xl underline">
              View All 14 Paid Recipes →
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 py-8 border-t border-[#00A651]/30 text-center">
        <p className="text-gray-400 text-lg font-semibold">© 2026 Zap Sauce. By Makhauhelo Moima. Product of Lesotho 🇱🇸</p>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20need%20order%20support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#00A651] hover:bg-[#00C85F] text-white p-4 rounded-full shadow-2xl shadow-green-500/60 transition-all z-50 border-2 border-[#00E06D]"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}