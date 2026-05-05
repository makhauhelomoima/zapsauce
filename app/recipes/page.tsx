import { RECIPES } from '@/data/recipes'

export default function RecipesPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Zap Sauce Recipes</h1>
      <div className="grid gap-4">
        {Object.entries(RECIPES).map(([key, recipe]) => (
          <div key={key} className="border border-orange-200 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{recipe.name}</h2>
            <p className="text-gray-600 mb-2">{recipe.description}</p>
            <p className="font-bold text-orange-600 mb-3">M{recipe.price}</p>
            <a
              href={`tel:*777*57031600*${recipe.price}%23`}
              className="bg-orange-500 text-white px-4 py-2 rounded inline-block"
            >
              SUBSCRIBE M{recipe.price}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}