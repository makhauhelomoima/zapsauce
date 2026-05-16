'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers/nextjs'
import { useRouter } from 'next/navigation'

export default function Portal() {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState('')
  const [affiliateLink, setAffiliateLink] = useState('')

  useEffect(() => {
    async function checkAuth() {
      const { data: { user } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/login')
        return
      }

      setUserEmail(user.email || '')
      setAffiliateLink(`https://zapsauce.vercel.app?ref=${encodeURIComponent(user.email || 'user')}`)

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      if (profile?.role !== 'customer' && profile?.role !== 'admin') {
        router.push('/login')
        return
      }

      setLoading(false)
    }
    checkAuth()
  }, [router, supabase])

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  function copyAffiliateLink() {
    navigator.clipboard.writeText(affiliateLink)
    alert('Link copied! Share it to earn 30% commission.')
  }

  if (loading) return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      Loading Portal...
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="border-b border-gray-800 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">⚡ My Portal</h1>
        <button onClick={handleLogout} className="text-sm bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700">
          Logout
        </button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-gray-900 rounded-2xl border-amber-500/30 p-6">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Earn 30% Commission</h3>
          <p className="text-gray-400 text-sm mb-4">Share this link:</p>
          <div className="flex gap-3">
            <input value={affiliateLink} readOnly className="flex-1 bg-gray-800 rounded-lg px-4 py-3 text-sm" />
            <button onClick={copyAffiliateLink} className="bg-amber-500 text-black font-bold px-6 py-3 rounded-lg">
              Copy
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}