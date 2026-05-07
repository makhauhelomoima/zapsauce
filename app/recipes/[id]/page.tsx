'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useParams } from 'next/navigation'
import { recipes } from '../../../data/recipes'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function RecipePage() {
  const { id } = useParams()
  const [user, setUser] = useState<any>(null)
  const [unlocked, setUnlocked] = useState(false)
  const [loading, setLoading] = useState(true)

  const recipe = recipes.find(r => r.id === id)

  useEffect(() => {
    checkAccess()
  }, [])

  const checkAccess = async () => {
    // Get logged in user
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)

    if (user?.email && recipe) {
      // Check if user purchased this recipe
      const { data } = await supabase
        .from('purchases')
        .select('*')
        .eq('user_email', user.email)
        .eq('recipe_id', id)
        .single()
      
      if (data) setUnlocked(true)
    }
    setLoading(false)
  }

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.href }
    })
  }

  if (loading) return <div className="bg-black min-h-screen text-white p-8">Loading...</div>
  if (!recipe) return <div className="bg-black min-h-screen text-white p-8">Recipe not found</div>

  // LOCKED VIEW
  if (!unlocked) {
    return (
      <div className="bg-black min-h-screen text-white p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-black text-[#00A651] mb-4">{recipe.name}</h1>
          <p className="text-gray-300 mb-6">{recipe.subtitle}</p>
          <p className="text-3xl font-black text-white mb-8">M{recipe.price}</p>
          
          {!user ? (
            <button
              onClick={handleLogin}
              className="bg-[#00A651] text-black font-black px-8 py-4 rounded-lg hover:bg-[#00E06D] transition"
            >
              Login with Google to Purchase
            </button>
          ) : (
            <a
              href={`https://www.payfast.co.za/eng/process?merchant_id=YOUR_ID&merchant_key=YOUR_KEY&amount=${recipe.price}&item_name=${recipe.name}&email_address=${user.email}`}
              className="bg-[#00A651] text-black font-black px-8 py-4 rounded-lg hover:bg-[#00E06D] transition inline-block"
            >
              Pay M{recipe.price} - Unlock Instantly
            </a>
          )}
        </div>
      </div>
    )
  }

  // UNLOCKED VIEW - FULL RECIPE
  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#00A651] text-black text-sm font-black px-4 py-2 rounded-full inline-block mb-4">
          ✓ UNLOCKED - {user?.email}
        </div>
        <h1 className="text-4xl font-black text-[#00E06D] mb-4">{recipe.name}</h1>
        <p className="text-gray-300 mb-8">{recipe.description}</p>
        
        <div className="bg-gray-900 border border-[#00A651]/30 rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-black text-[#00E06D] mb-4">Ingredients</h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ing, i) => (
              <li key={i} className="text-white">• {ing}</li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-900 border border-[#00A651]/30 rounded-xl p-6">
          <h2 className="text-2xl font-black text-[#00E06D] mb-4">Method</h2>
          <ol className="space-y-3">
            {recipe.method.map((step, i) => (
              <li key={i} className="text-white">{i + 1}. {step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}'use client'

export default function FranchisePage() {
  return (
    <div className="bg-black min-h-[100dvh] text-white">
      <div className="bg-black border-b border-[#00A651]/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#00A651]">Zap Sauce.</span>
            <span className="text-sm text-[#00E06D]">Lightning in a jar! ⚡</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-[#00A651] mb-2">ZAP SAUCE FRANCHISE KIT 2026</h1>
          <p className="text-xl text-[#00E06D] mb-1">Lightning in a jar! ⚡</p>
          <p className="text-lg text-white">PRODUCT OF LESOTHO 🇱🇸</p>
          <p className="text-sm text-red-400 font-bold mt-4">CONFIDENTIAL | NOT FOR RESALE</p>
        </div>

        <div className="bg-gray-900 border border-yellow-500/30 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">GLOBAL LICENSE - 100% OWNERSHIP</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#00A651] mb-3">What's Inside:</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ Master Base Formula - The foundation</li>
                <li>✓ 18 Signature Recipes - Full formulas</li>
                <li>✓ Complete Branding Kit - Colors, logo rules</li>
                <li>✓ Sales Scripts - WhatsApp, Facebook, Door-to-door</li>
                <li>✓ Legal License - Global rights, 0% affiliate</li>
                <li>✓ WhatsApp Support - Direct line to Makhauhelo</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#00A651] mb-3">License Terms:</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>✓ You keep 100% of all sales</li>
                <li>✓ 0% affiliate to Zap Sauce</li>
                <li>✓ Global territory rights</li>
                <li>✓ Make & sell products in your region</li>
                <li>✓ PDF for personal/business use only</li>
                <li>✓ May NOT resell this PDF</li>
              </ul>
            </div>
          </div>

          <div className="bg-black/50 border border-[#00E06D]/30 rounded-lg p-4 mb-6">
            <p className="text-center text-[#00E06D] font-bold">
              "18 recipes. 1 Master Base. Global rights. Your empire starts here."
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-black text-white mb-2">M2,500</p>
            <p className="text-sm text-gray-400 mb-6">One-time payment. Lifetime license. PDF delivered via WhatsApp.</p>

            <button className="w-full bg-[#00A651] text-black font-black py-4 rounded-lg text-xl hover:bg-[#00E06D] transition">
              UNLOCK FRANCHISE KIT - M2,500
            </button>

            <p className="text-xs text-gray-500 mt-4">
              After payment: PDF sent to your WhatsApp within 10 minutes<br/>
              Support: +266 57031600 | 6am-10pm CAT daily
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-8">
          <p>© 2026 Zap Sauce. GLOBAL. | MAKHAUHELO MOIMA</p>
          <p>All Rights Reserved. NOT MEDICINE.</p>
          <p className="text-[#00A651] mt-2">For Considered Families. Product of Lesotho 🇱🇸</p>
        </div>
      </div>
    </div>
  )
}