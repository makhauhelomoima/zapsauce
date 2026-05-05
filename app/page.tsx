import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-black min-h-[100dvh] text-white flex flex-col px-4 py-3 relative overflow-hidden">

      {/* Admin Button - Top Right - Bigger */}
      <Link
        href="/admin"
        className="absolute top-3 right-3 bg-[#00A651] hover:bg-[#00C85F] border-2 border-[#00E06D] text-white px-5 py-2 rounded-lg text-sm font-bold shadow-lg shadow-green-500/50 z-50"
      >
        Admin
      </Link>

      {/* Green Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,166,81,0.2)_0%,_transparent_60%)]"></div>

      {/* MAIN CONTENT - Fill Screen, Bigger Text */}
      <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10 w-full max-w-lg mx-auto py-8">

        {/* Main Logo - BIGGER */}
        <h1 className="text-6xl md:text-7xl font-black text-[#00E06D] mb-3 drop-shadow-[0_0_30px_rgba(0,224,109,0.8)]">
          Zap Sauce.
        </h1>

        {/* Taglines - MUCH BIGGER */}
        <p className="text-3xl text-[#00C85F] mb-3 font-black">Immunity in a jar! ⚡</p>
        <p className="text-xl text-gray-100 mb-2 font-semibold">What hurts? We have a recipe for that.</p>
        <p className="text-lg text-gray-200 mb-2">1 tbsp daily keeps the doctor away.</p>
        <p className="text-base text-gray-400 mb-6 italic">Wisdom in a modern jar.</p>

        {/* Subtitle - Readable */}
        <p className="text-sm text-gray-400 mb-7 leading-relaxed px-2">
          Sweet + Savory Healing. Start free. For considered families. With lightning immune systems.
        </p>

        {/* CTA Buttons - BIGGER */}
        <div className="flex flex-col gap-4 justify-center mb-6 w-full px-2">
          <Link
            href="/recipes"
            className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-8 py-5 rounded-xl text-xl shadow-2xl shadow-green-500/50 transition-all border-2 border-[#00E06D]"
          >
            View 13 Recipes
          </Link>
          <Link
            href="/portal"
            className="border-2 border-[#00A651] text-[#00C85F] hover:bg-[#00A651] hover:text-white font-black px-8 py-5 rounded-xl text-xl transition-all"
          >
            Customer Portal
          </Link>
        </div>

        {/* PDF Kit CTA - BIGGER TEXT */}
        <div className="bg-gray-900 border-2 border-[#00A651] rounded-xl p-5 mb-6 backdrop-blur shadow-2xl shadow-green-500/30 w-full">
          <h3 className="text-2xl font-black text-[#00E06D] mb-2">Request PDF Recipes Kit</h3>
          <p className="text-gray-200 text-base mb-1">All 13 recipes in one PDF = Save 70%</p>
          <p className="text-[#00C85F] text-lg mb-4 font-black">WAS M1888 → NOW M560</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-5xl font-black text-white">M560</span>
            <a
              href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20want%20PDF%20Recipes%20Kit%20M560%20-%20all%2013%20recipes"
              className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-4 rounded-lg text-lg shadow-xl shadow-green-500/40 border-2 border-[#00E06D]"
            >
              Request PDF 📄
            </a>
          </div>
        </div>

        {/* Footer - BIGGER + READABLE */}
        <div className="text-sm text-gray-400 mt-4">
          <p className="mb-1 font-semibold">Product of Lesotho 🇱🇸 | By Makhauhelo Moima</p>
          <p className="text-xs">© 2026 Zap Sauce. For considered families. With lightning immune systems.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button - BIGGER */}
      <a
        href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20need%20order%20support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-[#00A651] hover:bg-[#00C85F] text-white px-6 py-4 rounded-full shadow-2xl shadow-green-500/60 transition-all z-50 flex items-center gap-3 border-2 border-[#00E06D]"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-base font-black">Order Support</span>
      </a>
    </main>
  )
}