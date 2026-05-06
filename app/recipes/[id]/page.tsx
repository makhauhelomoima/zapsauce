'use client'

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