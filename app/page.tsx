import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-orange-950 min-h-screen text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">

      {/* Admin Button - Top Right */}
      <Link
        href="/admin"
        className="absolute top-4 right-4 bg-gray-800/80 hover:bg-gray-700 border border-orange-500/50 text-orange-400 px-4 py-2 rounded-lg text-sm font-bold backdrop-blur"
      >
        Admin
      </Link>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>

      <div className="text-center max-w-3xl relative z-10">
        {/* Main Logo - With Period */}
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-3">
          Zap Sauce.
        </h1>

        {/* Taglines */}
        <p className="text-2xl text-orange-300 mb-2 font-semibold">Immunity in a jar! ⚡</p>
        <p className="text-xl text-gray-300 mb-2">What hurts? We have a recipe for that.</p>
        <p className="text-lg text-gray-400 mb-1">1 tbsp daily keeps the doctor away.</p>
        <p className="text-md text-gray-500 mb-6 italic">Wisdom in a modern jar.</p>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-8">
          Sweet + Savory Healing. Start free. For considered families. With lightning immune systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/recipes"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold px-8 py-4 rounded-xl text-lg shadow-lg shadow-orange-500/30 transition-all"
          >
            View 14 Recipes
          </Link>
          <Link
            href="/portal"
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 rounded-xl text-lg transition-all"
          >
            Customer Portal
          </Link>
        </div>

        {/* PDF Kit CTA */}
        <div className="bg-gray-900/60 border border-orange-900/50 rounded-xl p-6 mb-8 backdrop-blur">
          <h3 className="text-xl font-bold text-orange-300 mb-2">Request PDF Recipes Kit</h3>
          <p className="text-gray-400 mb-4">All 14 recipes in one PDF = Save time + money</p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-3xl font-bold text-white">M560</span>
            <a
              href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20want%20PDF%20Recipes%20Kit%20M560%20-%20all%2014%20recipes"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg text-sm"
            >
              Request PDF 📄
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-600 mt-12">
          <p className="mb-1">Product of Lesotho 🇱🇸 | By Makhauhelo Moima</p>
          <p>© 2026 Zap Sauce. For considered families. With lightning immune systems.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/26657031600?text=Hi%20Zap%20Sauce%20I%20need%20order%20support"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-500/50 transition-all z-50 flex items-center gap-2"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden sm:inline text-sm font-bold">Order Support</span>
      </a>
    </main>
  )
}