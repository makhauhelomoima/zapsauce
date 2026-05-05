import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-orange-500 mb-2">ZAP SAUCE</h1>
        <p className="text-lg text-gray-300 mb-2">What hurts? We have a recipe for that.</p>
        <p className="text-sm text-gray-500 mb-8">Sweet + Savory Healing. Start free. Lesotho → World 🇱🇸🌍</p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/recipes"
            className="bg-orange-500 hover:bg-orange-600 text-black font-bold px-8 py-4 rounded-lg text-lg"
          >
            View 14 Recipes
          </Link>
          <Link
            href="/portal"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold px-8 py-4 rounded-lg text-lg"
          >
            Customer Portal
          </Link>
        </div>
      </div>
    </main>
  )
}