import { RECIPES } from '../../data/recipes'

export default function RecipesPage() {
  return (
    <div className="bg-black min-h-screen text-white p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">Zap Sauce Recipes</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(RECIPES).map(([key, recipe]) => (
            <div key={key} className="border border-orange-900 bg-gray-900 p-6 rounded-lg">
              <div className="text-xs text-orange-400 mb-2">{recipe.type}</div>
              <h2 className="text-xl font-bold text-orange-300 mb-2">{recipe.name}</h2>
              <div className="text-xs text-orange-400 mb-2">FOR:</div>
              <ul className="text-sm mb-4 min-h-[100px]">
                {recipe.cures.map((cure, i) => (
                  <li key={i} className="mb-1 text-gray-300">✓ {cure}</li>
                ))}
              </ul>
              {recipe.warning && (
                <div className="bg-red-900/30 border border-red-700 p-2 rounded mb-4 text-xs text-red-300">
                  ⚠️ {recipe.warning}
                </div>
              )}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-2xl font-bold">M{recipe.price}</div>
                  <div className="text-xs text-gray-500">Ref: {recipe.ref}</div>
                </div>
                <a
                  href={`tel:${recipe.ussd}`}
                  className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-4 py-2 rounded text-sm"
                >
                  MPESA
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}