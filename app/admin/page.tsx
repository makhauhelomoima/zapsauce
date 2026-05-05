'use client'
import { useEffect, useState } from 'react'
import { RECIPES } from '../../data/recipes'
import Link from 'next/link'

export default function AdminPage() {
  const [isAuthed, setIsAuthed] = useState(false)
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (localStorage.getItem('zap_admin_auth') === 'HEAL120') {
      setIsAuthed(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'HEAL120') {
      localStorage.setItem('zap_admin_auth', 'HEAL120')
      setIsAuthed(true)
    } else {
      alert('Incorrect password')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('zap_admin_auth')
    setIsAuthed(false)
  }

  if (!isAuthed) {
    return (
      <div className="bg-black min-h-[100dvh] flex items-center justify-center p-4">
        <div className="bg-gray-900 border-2 border-[#00A651] rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-4xl font-black text-[#00E06D] text-center mb-6">Zap Sauce Admin</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full bg-gray-800 border-2 border-[#00A651] text-white text-xl p-4 rounded-xl mb-4 focus:outline-none focus:border-[#00E06D]"
            />
            <button type="submit" className="w-full bg-[#00A651] hover:bg-[#00C85F] text-white font-black py-4 rounded-xl text-xl">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  const allRecipes = Object.values(RECIPES)
  const totalRecipes = allRecipes.length
  const paidRecipes = allRecipes.filter(r => r._type === 'PAID').length
  const freeSamples = allRecipes.filter(r => r._type === 'FREE').length
  const potentialRevenue = allRecipes.reduce((sum, r) => sum + r.cost, 0)

  const getTypeColor = (type: string) => {
    if (type === 'FREE') return 'bg-[#00A651] text-white'
    if (type === 'PAID') return 'bg-[#00C85F] text-black'
    if (type === 'SUBSCRIPTION') return 'bg-yellow-500 text-black'
    if (type === 'EXCLUSIVE') return 'bg-purple-600 text-white'
    return 'bg-gray-600 text-white'
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white p-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-black text-[#00E06D]">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Zap Sauce Management</p>
          </div>
          <div className="flex gap-2">
            <Link href="/" className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded-lg text-sm">
              ← View Site
            </Link>
            <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg text-sm">
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <div className="border-2 border-[#00A651] bg-black/60 p-4 rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Total Recipes</p>
            <p className="text-4xl font-black text-white">{totalRecipes}</p>
          </div>
          <div className="border-2 border-[#00A651] bg-black/60 p-4 rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Paid Recipes</p>
            <p className="text-4xl font-black text-white">{paidRecipes}</p>
          </div>
          <div className="border-2 border-yellow-500 bg-black/60 p-4 rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Potential Revenue</p>
            <p className="text-4xl font-black text-yellow-500">M{potentialRevenue}</p>
          </div>
          <div className="border-2 border-[#00A651] bg-black/60 p-4 rounded-xl">
            <p className="text-gray-400 text-sm mb-1">Free Samples</p>
            <p className="text-4xl font-black text-white">{freeSamples}</p>
          </div>
        </div>

        <div className="bg-gray-900/90 border-2 border-[#00A651]/40 rounded-xl p-4">
          <h2 className="text-xl font-black text-[#00C85F] mb-4">Recipe Inventory</h2>
          <div className="grid grid-cols-5 gap-2 text-sm font-bold text-[#00C85F] border-b border-gray-700 pb-2 mb-2">
            <div>Name</div>
            <div className="text-center">Type</div>
            <div className="text-right">Price</div>
            <div className="text-center">Ref</div>
            <div className="text-center">USSD</div>
          </div>
          <div className="space-y-2">
            {allRecipes.map((recipe) => (
              <div key={recipe.id} className="grid grid-cols-5 gap-2 text-sm items-center py-2 border-b border-gray-800 last:border-0">
                <div className="font-bold text-white text-xs md:text-sm">{recipe.name}</div>
                <div className="text-center">
                  <span className={`px-2 py-1 rounded-md font-black text-xs ${getTypeColor(recipe._type)}`}>
                    {recipe._type}
                  </span>
                </div>
                <div className="text-right font-black text-white">M{recipe.cost}</div>
                <div className="text-center text-gray-400 text-xs">{recipe._ref}</div>
                <div className="text-center text-gray-400 text-xs">{recipe._ussd || 'N/A'}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 mb-6">
          <p className="text-xs text-gray-600">© 2026 Zap Sauce Admin | By Makhauhelo Moima | Password Protected 🔒</p>
        </div>
      </div>
    </div>
  )
}