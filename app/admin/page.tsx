'use client'
import { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers/nextjs'
import { useRouter } from 'next/navigation'

export default function Admin() {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      const { data: { user } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/login')
        return
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      if (profile?.role !== 'admin') {
        router.push('/portal')
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

  if (loading) return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      Loading Admin...
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-amber-400">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded-lg">Logout</button>
      </div>
      
      <div className="bg-gray-900 rounded-2xl p-6 border-gray-800">
        <p>Admin content goes here. Orders, users, payouts.</p>
      </div>
    </div>
  )
}