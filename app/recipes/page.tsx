import { RECIPES } from '../../data/recipes'
import Link from 'next/link'

export default function RecipesPage() {
  return (
    <div className="bg-black min-h-screen text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-orange-500 mb-2">ZAP SAUCE</h1>
          <p className="text-lg text-gray-300">What hurts? We have a recipe for that.</p>
          <p className="text-sm text-gray-500">Sweet + Savory Healing. Start free. Lesotho → World 🇱🇸🌍</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(RECIPES).map(([key, recipe]) => (
            <div key={key} className="border border-orange-900/50 bg-gray-900/80 backdrop-blur p-6 rounded-xl hover:border-orange-500 transition-all">
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

        <div className="text-center mt-12 mb-8">
          <Link href="/" className="text-orange-500 hover:text-orange-400">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}