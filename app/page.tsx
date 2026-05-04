'use client'

const PRODUCTS = [
  { id: 'zap-original', name: 'ZAP SAUCE ORIGINAL', price: 120, ref: 'ZAP', desc: 'Daily immunity for everyone 2+. Turmeric + Ginger + Honey.', file: 'https://drive.google.com/uc?export=download&id=1pTliR0d9x2uFOUtmuXBXyz2iHFgz1pUp' },
  { id: 'zap-citrus', name: 'ZAP SAUCE CITRUS', price: 140, ref: 'CITRUS', desc: 'Flu killer. Lemon + Orange zest. 2x faster. FRIDGE ONLY.', file: 'https://drive.google.com/uc?export=download&id=1VxPs9JEE83Q9fZkM4hZ4YaT-DtDptJc6' },
  { id: 'zap-warrior', name: 'ZAP SAUCE WARRIOR PRO', price: 197, ref: 'PRO', desc: 'Blood flow + stamina. Men 18+. Cayenne + Maca + Pumpkin.', file: 'https://drive.google.com/uc?export=download&id=1Ro1SMn3GzbwnkjeXNQxcu_ZviFOzYIoL' },
  { id: 'zap-queen', name: 'ZAP SAUCE QUEEN EDITION', price: 197, ref: 'QUEEN', desc: 'Hormone peace. Women 40+. Flax + Sage + Cacao.', file: 'https://drive.google.com/uc?export=download&id=10BZEMiArqPz4ksXZ0PB70FYYIYp-AB62' },
  { id: 'zap-bone', name: 'ZAP SAUCE BONE EDITION', price: 157, ref: 'BONE', desc: 'Winter armor. Joint pain killer. Sesame + Moringa + Eggshell.', file: 'https://drive.google.com/uc?export=download&id=1WnzlS2hbWJbFrY-C2Jm6JbN2i8nF0UCN' },
  { id: 'zap-pack', name: 'ZAP SAUCE PACK - ALL 5', price: 647, ref: 'PACK', desc: 'Full arsenal. Save M164. One purchase, winter covered.', file: '#' }
]

const MPESA_NUMBER = "57031600"
const MPESA_NAME = "Makhauhelo Moima"
const WHATSAPP_NUMBER = "26657031600"
const EMAIL = "zapsauce.ls@gmail.com"

export default function ZapSauce() {
  const whatsappLink = (product: typeof PRODUCTS[0]) => {
    const text = `Hi! I paid M${product.price} for ${product.name}. Ref: ${product.ref}. My Mpesa names: [Your Name]. Please send PDF.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  }

  return (
    <div className="min-h-screen bg-black text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center py-10">
          <h1 className="text-7xl font-black text-yellow-400 mb-4" style={{fontFamily: 'Bebas Neue, cursive'}}>ZAP SAUCE ⚡</h1>
          <p className="text-xl mb-2">By Makhauhelo Moima | Product of Lesotho 🇱🇸</p>
          <p className="text-yellow-300 text-lg mb-8">1 tsp daily keeps pharmacy away</p>
          <div className="relative w-full max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden border-4 border-yellow-500">
            <img src="/zap-sauce-hero.jpg" alt="Zap Sauce - Turmeric Ginger Honey Immunity" className="w-full h-auto"/>
          </div>
          <div className="bg-red-900 border-2 border-red-500 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-xl font-bold">NO PAYPAL. NO STRIPE. NO CARD DECLINES.</p>
            <p className="text-lg">Mpesa only. You control the bank. I control the PDF.</p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="border-2 border-yellow-500 rounded-lg p-6 bg-gray-900">
              <h2 className="text-2xl font-bold text-yellow-300 mb-2" style={{fontFamily: 'Bebas Neue, cursive'}}>{p.name}</h2>
              <p className="text-gray-300 mb-4 text-sm">{p.desc}</p>
              <div className="text-5xl font-black text-white mb-4">M{p.price}</div>
              <div className="bg-gray-800 p-4 rounded mb-4">
                <p className="text-yellow-400 font-bold mb-2">PAY MPESA:</p>
                <p className="text-lg">1. Number: <span className="text-white font-bold">{MPESA_NUMBER}</span></p>
                <p className="text-lg">2. Name: <span className="text-white font-bold">{MPESA_NAME}</span></p>
                <p className="text-lg">3. Ref: <span className="text-white font-bold">{p.ref}</span></p>
              </div>
              <a href={whatsappLink(p)} target="_blank" className="block w-full bg-green-600 text-white text-center py-4 rounded font-bold text-lg hover:bg-green-500">
                STEP 4: SEND PROOF ON WHATSAPP →
              </a>
              <a href="/track" className="block w-full text-center py-2 text-yellow-400 text-sm mt-2">Track Order Status →</a>
            </div>
          ))}
        </div>

        <footer className="text-center py-10 border-t-2 border-yellow-500 text-gray-400">
          <p className="text-yellow-400 font-bold text-lg mb-2">BUSINESS ORDERS 10+ JARS:</p>
          <p className="text-white mb-6">{EMAIL}</p>
          <p className="mt-6">© 2026 Zap Sauce ⚡ | Made at 00:58 in Maseru</p>
          <p className="text-xs mt-2">Traditional food. Not medical advice. Not a cure. Consult clinic if sick. Honey never for babies under 1.</p>
        </footer>
      </div>
    </div>
  )
    }
