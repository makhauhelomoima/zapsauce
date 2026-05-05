import { RECIPES } from '../../data/recipes'
import Link from 'next/link'

export default function RecipesPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-orange-950 min-h-screen text-white p-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Zap Sauce.
            </h1>
          </Link>
          <p className="text-xl text-orange-300 mb-1 font-semibold">Immunity in a jar! ⚡</p>
          <p className="text-lg text-gray-300">What hurts? We have a recipe for that.</p>
          <p className="text-sm text-gray-500 mt-2">1 tbsp daily keeps the doctor away. Wisdom in a modern jar.</p>
        </div>

        {/* PDF Kit Banner */}
        <div className="bg-gradient-to-r from-orange-900/40 to-yellow-900/40 border border-orange-500/50 rounded-xl p-6 mb-8 backdrop-blur text-center">
          <h3 className="text-2xl font-bold text-orange-300 mb-2">Request PDF Recipes Kit M560</h3>
          <p className="text-gray-300 mb-4">All 14 recipes in one PDF = Save time + money</p>
          <a
            href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20want%20PDF%20Recipes%20Kit%20M560%20-%20all%2014%20recipes"
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg inline-block"
          >
            Get Complete PDF 📄
          </a>
        </div>

        {/* Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(RECIPES).map(([key, recipe]) => (
            <div key={key} className="border border-orange-900/50 bg-gray-900/80 backdrop-blur p-6 rounded-xl hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/20 transition-all">
              <div className="flex justify-between items-start mb-3">
                <div className="text-xs text-orange-400 font-bold">{recipe.type}</div>
                {recipe.type === 'FREE' && (
                  <div className="text-xs bg-green-600 text-black px-2 py-1 rounded font-bold">FREE</div>
                )}
                {recipe.type === 'AUTO' && (
                  <div className="text-xs bg-yellow-600 text-black px-2 py-1 rounded font-bold">AUTO</div>
                )}
                {recipe.type === 'SAVORY' && (
                  <div className="text-xs bg-orange-600 text-black px-2 py-1 rounded font-bold">SAVORY</div>
                )}
                {recipe.type === 'BUNDLE' && (
                  <div className="text-xs bg-purple-600 text-white px-2 py-1 rounded font-bold">BUNDLE</div>
                )}
              </div>

              <h2 className="text-2xl font-bold text-orange-300">{recipe.name}</h2>
              {recipe.subtitle && (
                <p className="text-sm text-gray-400 mb-3">{recipe.subtitle}</p>
              )}

              <div className="text-xs text-orange-400 mb-2 mt-4 font-bold">CURES:</div>
              <ul className="text-sm mb-4 min-h-[120px]">
                {recipe.cures.map((cure, i) => (
                  <li key={i} className="mb-1 text-gray-300 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{cure}</span>
                  </li>
                ))}
              </ul>

              {recipe.warning && (
                <div className="bg-red-900/30 border border-red-700 p-3 rounded mb-4 text-xs text-red-300">
                  ⚠️ {recipe.warning}
                </div>
              )}

              <div className="border-t border-gray-800 pt-4 mt-4">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <div className="text-3xl font-bold text-white">
                      {recipe.price === 0? 'FREE' : `M${recipe.price}`}
                    </div>
                    <div className="text-xs text-gray-500">Ref: {recipe.ref}</div>
                  </div>
                  {recipe.price === 0? (
                    <a
                      href={`https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20want%20FREE%20SAMPLE`}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg text-sm"
                    >
                      GET FREE 🎁
                    </a>
                  ) : recipe.type === 'AUTO'? (
                    <a
                      href={`tel:${recipe.ussd}`}
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg text-sm"
                    >
                      SUBSCRIBE 🔒
                    </a>
                  ) : (
                    <a
                      href={`tel:${recipe.ussd}`}
                      className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-6 py-3 rounded-lg text-sm"
                    >
                      MPESA 🔒
                    </a>
                  )}
                </div>
                <div className="text-xs text-gray-600 text-center">
                  {recipe.price === 0? 'Tap to view instantly' : 'Dialer opens → Press 1 → Send'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 mb-8">
          <Link href="/" className="text-orange-500 hover:text-orange-400 font-bold">
            ← Back to Home
          </Link>
          <div className="text-xs text-gray-600 mt-8">
            <p className="mb-1">Product of Lesotho 🇱🇸 | By Makhauhelo Moima</p>
            <p>© 2026 Zap Sauce. For considered families. With lightning immune systems.</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20need%20order%20support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/50 transition-all z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}