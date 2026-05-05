import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-black min-h-[100dvh] text-white flex flex-col items-center justify-between py-4 px-4 relative overflow-hidden">

      {/* Admin Button - Top Right - Tight */}
      <Link
        href="/admin"
        className="absolute top-3 right-3 bg-[#00A651] hover:bg-[#00C85F] border border-[#00E06D] text-white px-4 py-1.5 rounded-md text-xs font-bold shadow-md shadow-green-500/40 z-50"
      >
        Admin
      </Link>

      {/* Subtle Green Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,166,81,0.15)_0%,_transparent_70%)]"></div>

      {/* SPACER TOP - Reduced */}
      <div className="h-2"></div>

      {/* MAIN CONTENT - Centered Tight */}
      <div className="text-center max-w-md relative z-10 w-full">
        
        {/* Main Logo - Exact NetBank Green */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#00E06D] mb-2 drop-shadow-[0_0_20px_rgba(0,224,109,0.6)]">
          Zap Sauce.
        </h1>

        {/* Taglines - Tighter Spacing */}
        <p className="text-xl text-[#00C85F] mb-1.5 font-bold">Immunity in a jar! ⚡</p>
        <p className="text-base text-gray-200 mb-1.5">What hurts? We have a recipe for that.</p>
        <p className="text-sm text-gray-300 mb-1">1 tbsp daily keeps the doctor away.</p>
        <p className="text-xs text-gray-500 mb-4 italic">Wisdom in a modern jar.</p>

        {/* Subtitle */}
        <p className="text-[11px] text-gray-500 mb-5 leading-tight">
          Sweet + Savory Healing. Start free. For considered families. With lightning immune systems.
        </p>

        {/* CTA Buttons - NetBank Green */}
        <div className="flex flex-col gap-3 justify-center mb-5">
          <Link
            href="/recipes"
            className="bg-[#00A651] hover:bg-[#00C85F] text-white font-bold px-6 py-3 rounded-lg text-base shadow-lg shadow-green-500/40 transition-all border border-[#00E06D]"
          >
            View 13 Recipes
          </Link>
          <Link
            href="/portal"
            className="border border-[#00A651] text-[#00C85F] hover:bg-[#00A651] hover:text-white font-bold px-6 py-3 rounded-lg text-base transition-all"
          >
            Customer Portal
          </Link>
        </div>

        {/* PDF Kit CTA - Tight Box */}
        <div className="bg-gray-900/90 border border-[#00A651]/60 rounded-lg p-4 mb-4 backdrop-blur shadow-xl shadow-green-500/20">
          <h3 className="text-lg font-bold text-[#00E06D] mb-1">Request PDF Recipes Kit</h3>
          <p className="text-gray-300 text-xs mb-1">All 13 recipes in one PDF = Save 70%</p>
          <p className="text-[#00C85F] text-xs mb-3 font-bold">WAS M1888 → NOW M560</p>
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl font-bold text-white">M560</span>
            <a
              href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20want%20PDF%20Recipes%20Kit%20M560%20-%20all%2013%20recipes"
              className="bg-[#00A651] hover:bg-[#00C85F] text-white font-bold px-5 py-2.5 rounded-md text-sm shadow-md shadow-green-500/30 border border-[#00E06D]"
            >
              Request PDF 📄
            </a>
          </div>
        </div>

        {/* Footer - Tight */}
        <div className="text-[10px] text-gray-600">
          <p className="mb-0.5">Product of Lesotho 🇱🇸 | By Makhauhelo Moima</p>
          <p>© 2026 Zap Sauce. For considered families. With lightning immune systems.</p>
        </div>
      </div>

      {/* SPACER BOTTOM - Reduced */}
      <div className="h-2"></div>

      {/* WhatsApp Floating Button - Tight */}
      <a
        href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20need%20order%20support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#00A651] hover:bg-[#00C85F] text-white px-5 py-3 rounded-full shadow-xl shadow-green-500/50 transition-all z-50 flex items-center gap-2 border border-[#00E06D]"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-sm font-bold">Order Support</span>
      </a>
    </main>
  )
}