'use client'
import { RECIPES } from '../../data/recipes'
import Link from 'next/link'

export default function AdminDashboard() {
  const paidRecipes = Object.values(RECIPES).filter(r => r.type === 'PAID' || r.type === 'SUBSCRIPTION')
  const freeRecipes = Object.values(RECIPES).filter(r => r.type === 'FREE')
  const totalRevenue = paidRecipes.reduce((sum, r) => sum + r.price, 0)

  return (
    <div className="bg-black min-h-[100dvh] text-white p-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-black text-[#00E06D]">Admin Dashboard</h1>
            <p className="text-gray-400 text-base">Zap Sauce Management</p>
          </div>
          <Link href="/" className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-3 rounded-lg text-lg">
            ← View Site
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 border-2 border-[#00A651] rounded-xl p-5">
            <div className="text-gray-400 text-sm mb-1">Total Recipes</div>
            <div className="text-4xl font-black text-white">{Object.keys(RECIPES).length}</div>
          </div>
          <div className="bg-gray-900 border-2 border-[#00A651] rounded-xl p-5">
            <div className="text-gray-400 text-sm mb-1">Paid Recipes</div>
            <div className="text-4xl font-black text-white">{paidRecipes.length}</div>
          </div>
          <div className="bg-gray-900 border-2 border-yellow-500 rounded-xl p-5">
            <div className="text-gray-400 text-sm mb-1">Potential Revenue</div>
            <div className="text-4xl font-black text-yellow-400">M{totalRevenue}</div>
          </div>
          <div className="bg-gray-900 border-2 border-[#00E06D] rounded-xl p-5">
            <div className="text-gray-400 text-sm mb-1">Free Samples</div>
            <div className="text-4xl font-black text-[#00E06D]">{freeRecipes.length}</div>
          </div>
        </div>

        {/* Recipes Management Table */}
        <div className="bg-gray-900 border-2 border-[#00A651] rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-black text-[#00E06D] mb-4">Recipe Inventory</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-2 text-[#00C85F]">Name</th>
                  <th className="py-3 px-2 text-[#00C85F]">Type</th>
                  <th className="py-3 px-2 text-[#00C85F]">Price</th>
                  <th className="py-3 px-2 text-[#00C85F]">Ref</th>
                  <th className="py-3 px-2 text-[#00C85F]">USSD</th>
                </tr>
              </thead>
              <tbody>
                {Object.values(RECIPES).map((recipe) => (
                  <tr key={recipe.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="py-3 px-2 text-white font-bold">{recipe.name}</td>
                    <td className="py-3 px-2">
                      <span className={`px-3 py-1 rounded-md text-xs font-black ${
                        recipe.type === 'FREE'? 'bg-[#00A651] text-white' :
                        recipe.type === 'SUBSCRIPTION'? 'bg-yellow-500 text-black' :
                        recipe.type === 'EXCLUSIVE'? 'bg-purple-600 text-white' :
                        'bg-[#00C85F] text-black'
                      }`}>
                        {recipe.type}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-white font-black">M{recipe.price}</td>
                    <td className="py-3 px-2 text-gray-400 text-sm">{recipe.ref}</td>
                    <td className="py-3 px-2 text-white font-mono text-sm">{recipe.ussd || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>© 2026 Zap Sauce Admin | By Makhauhelo Moima</p>
        </div>
      </div>
    </div>
  )
}