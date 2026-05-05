import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-black min-h-[100dvh] text-white flex flex-col px-2 py-0 relative overflow-hidden justify-between">

      {/* Admin Button */}
      <Link
        href="/admin"
        className="fixed top-2 right-2 bg-[#00A651] hover:bg-[#00C85F] border-2 border-[#00E06D] text-white px-4 py-2 rounded-md text-xs font-black shadow-xl shadow-green-500/60 z-50"
      >
        Admin
      </Link>

      {/* Green Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,166,81,0.5)_0%,_rgba(0,0,0,1)_70%)] pointer-events-none"></div>

      {/* SPACER TOP */}
      <div className="h-10"></div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-around items-center text-center relative z-10 w-full py-3">

        {/* TOP SECTION */}
        <div className="w-full">
          <h1 className="text-8xl font-black text-[#00E06D] mb-3 drop-shadow-[0_0_60px_rgba(0,224,109,1)] leading-[0.85]">
            Zap Sauce.
          </h1>

          <p className="text-4xl text-[#00C85F] mb-2 font-black leading-tight">Immunity in a jar! ⚡</p>
          <p className="text-3xl text-gray-50 mb-3 font-bold leading-tight px-2">What hurts? We have a recipe for that.</p>

          {/* ARROW 1: ENLARGED */}
          <p className="text-2xl text-gray-100 mb-2 font-bold">1 tbsp daily keeps the doctor away.</p>

          {/* ARROW 2: ENLARGED */}
          <p className="text-xl text-gray-300 mb-6 italic font-semibold">Wisdom in a modern jar.</p>

          {/* ARROW 3: ENLARGED */}
          <p className="text-lg text-gray-300 mb-7 leading-snug px-3 font-semibold">
            Sweet + Savory Healing. Start free. For considered families. With lightning immune systems.
          </p>
        </div>

        {/* MIDDLE - BUTTONS */}
        <div className="w-full px-1">
          <div className="flex flex-col gap-4 justify-center mb-7">
            <Link
              href="/recipes"
              className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-6 py-7 rounded-2xl text-3xl shadow-2xl shadow-green-500/70 transition-all border-3 border-[#00E06D]"
            >
              View 13 Recipes
            </Link>

            {/* ARROW 4: ENLARGED + UNDERLINED */}
            <Link
              href="/portal"
              className="border-3 border-[#00A651] text-[#00C85F] hover:bg-[#00A651] hover:text-white font-black px-6 py-7 rounded-2xl text-3xl transition-all underline decoration-4 underline-offset-8"
            >
              Customer Portal
            </Link>
          </div>
        </div>

        {/* BOTTOM - PDF + FOOTER */}
        <div className="w-full">
          <div className="bg-gray-900 border-3 border-[#00A651] rounded-2xl p-6 mb-5 backdrop-blur shadow-2xl shadow-green-500/60">
            <h3 className="text-4xl font-black text-[#00E06D] mb-3 leading-tight">Request PDF Recipes Kit</h3>
            <p className="text-gray-100 text-xl mb-2 font-bold">All 13 recipes in one PDF = Save 70%</p>
            <p className="text-[#00C85F] text-3xl mb-5 font-black">WAS M1888 → NOW M560</p>
            <div className="flex items-center justify-center gap-5">
              <span className="text-8xl font-black text-white leading-none">M560</span>
              <a
                href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20want%20PDF%20Recipes%20Kit%20M560%20-%20all%2013%20recipes"
                className="bg-[#00A651] hover:bg-[#00C85F] text-white font-black px-8 py-6 rounded-xl text-2xl shadow-green-500/70 border-3 border-[#00E06D]"
              >
                Request PDF 📄
              </a>
            </div>
          </div>

          {/* ARROW 5: FOOTER ENLARGED */}
          <div className="text-lg text-gray-200 font-bold pb-2">
            <p className="mb-1">Product of Lesotho 🇱🇸 | By Makhauhelo Moima</p>
            <p className="text-base">© 2026 Zap Sauce. For considered families. With lightning immune systems.</p>
          </div>
        </div>
      </div>

      {/* SPACER BOTTOM */}
      <div className="h-14"></div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20need%20order%20support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 right-2 bg-[#00A651] hover:bg-[#00C85F] text-white px-8 py-6 rounded-full shadow-2xl shadow-green-500/80 transition-all z-50 flex items-center gap-3 border-3 border-[#00E06D]"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-xl font-black">Order Support</span>
      </a>
    </main>
  )
}