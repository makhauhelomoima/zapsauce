'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Portal() {
  const [phone, setPhone] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [doses, setDoses] = useState(0)
  const [totalOrders, setTotalOrders] = useState(0)

  const handleLogin = () => {
    if (phone.length === 8) {
      setLoggedIn(true)
      setDoses(12)
      setTotalOrders(3)
    }
  }

  if (!loggedIn) {
    return (
      <div className="bg-black min-h-[100dvh] text-white flex flex-col items-center justify-center p-4">
        <div className="max-w-sm w-full">
          <Link href="/" className="inline-block mb-6">
            <h1 className="text-3xl font-bold text-[#00E06D] drop-shadow-[0_0_20px_rgba(0,224,109,0.6)]">
              Zap Sauce.
            </h1>
          </Link>
          
          <div className="bg-gray-900/90 border border-[#00A651]/60 rounded-lg p-6 backdrop-blur shadow-xl shadow-green-500/20">
            <h2 className="text-xl font-bold text-[#00E06D] mb-1">Customer Portal</h2>
            <p className="text-gray-400 text-sm mb-5">Track doses. Earn points. Get reminders.</p>
            
            <label className="block text-sm text-[#00C85F] mb-2 font-bold">Phone Number</label>
            <input
              type="tel"
              placeholder="57031600"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-black border border-[#00A651] rounded-md px-4 py-3 text-white mb-4 focus:border-[#00E06D] focus:outline-none"
              maxLength={8}
            />
            
            <button
              onClick={handleLogin}
              className="w-full bg-[#00A651] hover:bg-[#00C85F] text-white font-bold py-3 rounded-md text-base shadow-lg shadow-green-500/40 border border-[#00E06D] transition-all"
            >
              Login via WhatsApp OTP
            </button>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              First time? Any purchase creates your account automatically.
            </p>
          </div>
          
          <Link href="/" className="text-[#00C85F] hover:text-[#00E06D] text-sm mt-6 block text-center">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-[100dvh] text-white p-3">
      <div className="max-w-2xl mx-auto">
        
        {/* Header - Tight */}
        <div className="flex justify-between items-center mb-5">
          <Link href="/">
            <h1 className="text-2xl font-bold text-[#00E06D] drop-shadow-[0_0_15px_rgba(0,224,109,0.5)]">
              Zap Sauce.
            </h1>
          </Link>
          <button
            onClick={() => setLoggedIn(false)}
            className="text-xs text-[#00C85F] hover:text-[#00E06D] border border-[#00A651] px-3 py-1.5 rounded-md"
          >
            Logout
          </button>
        </div>

        {/* Welcome Card */}
        <div className="bg-gray-900/90 border border-[#00A651]/60 rounded-lg p-5 mb-4 backdrop-blur shadow-xl shadow-green-500/20">
          <h2 className="text-lg font-bold text-[#00E06D] mb-1">Welcome back!</h2>
          <p className="text-gray-400 text-sm">+{phone}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-900/90 border border-[#00A651]/60 rounded-lg p-4 text-center backdrop-blur">
            <div className="text-3xl font-bold text-[#00E06D]">{doses}</div>
            <div className="text-xs text-gray-400 mt-1">Doses Logged</div>
          </div>
          <div className="bg-gray-900/90 border border-[#00A651]/60 rounded-lg p-4 text-center backdrop-blur">
            <div className="text-3xl font-bold text-[#00E06D]">{doses * 10}</div>
            <div className="text-xs text-gray-400 mt-1">Loyalty Points</div>
          </div>
        </div>

        {/* Log Dose Button */}
        <button
          onClick={() => setDoses(doses + 1)}
          className="w-full bg-[#00A651] hover:bg-[#00C85F] text-white font-bold py-4 rounded-lg text-base shadow-lg shadow-green-500/40 border border-[#00E06D] mb-4 transition-all"
        >
          ✓ Log Today's Dose (1 tbsp)
        </button>

        {/* Progress Bar */}
        <div className="bg-gray-900/90 border border-[#00A651]/60 rounded-lg p-4 mb-4 backdrop-blur">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Monthly Progress</span>
            <span>{doses}/30 days</span>
          </div>
          <div className="w-full bg-black rounded-full h-2 border border-[#00A651]/30">
            <div 
              className="bg-gradient-to-r from-[#00A651] to-[#00E06D] h-2 rounded-full transition-all"
              style={{ width: `${(doses / 30) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Orders */}
        <div className="bg-gray-900/90 border border-[#00A651]/60 rounded-lg p-4 mb-4 backdrop-blur">
          <h3 className="text-base font-bold text-[#00E06D] mb-3">Order History</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm border-b border-gray-800 pb-2">
              <div>
                <div className="text-white">ORIGINAL - Turmeric Gold</div>
                <div className="text-xs text-gray-500">12 Jan 2026</div>
              </div>
              <div className="text-[#00E06D] font-bold">M120</div>
            </div>
            <div className="flex justify-between text-sm border-b border-gray-800 pb-2">
              <div>
                <div className="text-white">MONTHLY HEAL</div>
                <div className="text-xs text-gray-500">01 Jan 2026</div>
              </div>
              <div className="text-[#00E06D] font-bold">M120</div>
            </div>
            <div className="flex justify-between text-sm">
              <div>
                <div className="text-white">PDF RECIPES KIT</div>
                <div className="text-xs text-gray-500">15 Dec 2025</div>
              </div>
              <div className="text-[#00E06D] font-bold">M560</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 mb-4">
          <Link href="/recipes" className="text-[#00C85F] hover:text-[#00E06D] font-bold text-sm">
            Order More Recipes →
          </Link>
          <div className="text- text-gray-600 mt-4">
            <p>Need help? WhatsApp 57031600</p>
          </div>
        </div>
      </div>
    </div>
  )
}