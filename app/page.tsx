'use client';
import { useState } from 'react';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleSubscribe = () => {
    window.location.href = 'tel:*777*57031600*120%23';
  };

  const handleMpesa = (amount: number, ref: string) => {
    window.location.href = `tel:*777*57031600*${amount}%23`;
  };

  const copyUSSD = (amount: number) => {
    navigator.clipboard.writeText(`*777*57031600*${amount}#`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const products = [
    {
      ref: 'ZAP',
      name: 'ORIGINAL',
      subtitle: 'Daily immunity 2+',
      price: 120,
      color: '#D4AF37',
      cures: [
        'Daily immunity for 2+',
        'Chronic inflammation',
        'Joint stiffness & arthritis pain',
        'Low immunity & frequent colds'
      ],
      desc: 'The classic. 4,000 years of Ayurvedic relief. M120 unlocks full recipe + dosage.'
    },
    {
      ref: 'CITRUS',
      name: 'CITRUS',
      subtitle: 'Flu killer. FRIDGE ONLY',
      price: 140,
      color: '#F4B400',
      cures: [
        'Flu killer. FRIDGE ONLY',
        'Vitamin C deficiency',
        'Seasonal flu & congestion',
        'Sluggish metabolism'
      ],
      desc: 'Immunity in a jar. Citrus fire meets turmeric gold. M140 for complete formula.'
    },
    {
      ref: 'PRO',
      name: 'WARRIOR PRO',
      subtitle: 'Men 18+ Blood flow + stamina',
      price: 197,
      color: '#1B4332',
      cures: [
        'Men 18+ Blood flow + stamina',
        'Poor nutrient absorption',
        'Post-workout inflammation',
        'Brain fog & low focus'
      ],
      desc: '2000% absorption. For fighters. M197 unlocks warrior-grade ratios + timing.'
    },
    {
      ref: 'QUEEN',
      name: 'QUEEN EDITION',
      subtitle: 'Women 40+ Hormone peace',
      price: 197,
      color: '#B8860B',
      cures: [
        'Women 40+ Hormone peace',
        'Blood sugar spikes',
        'PMS & menstrual cramps',
        'Sugar cravings'
      ],
      desc: 'Regal relief. Balances body. M197 reveals royal ratios + evening ritual.'
    },
    {
      ref: 'BONE',
      name: 'BONE EDITION',
      subtitle: 'Adults 30+ Joint pain',
      price: 157,
      color: '#8B4513',
      cures: [
        'Adults 30+ Joint pain',
        'Knee & hip joint pain',
        'Osteoarthritis flare-ups',
        'Morning stiffness'
      ],
      desc: 'Ancient bone tonic. Ginger + turmeric synergy. M157 for joint-specific dosing.'
    },
    {
      ref: 'HERB',
      name: 'HERB FIRE',
      subtitle: 'Garlic Rosemary',
      price: 157,
      color: '#2D5016',
      cures: [
        'High blood pressure & cholesterol',
        'Poor circulation',
        'Antibiotic resistance',
        'Cognitive decline'
      ],
      desc: 'Mediterranean medicine. Savory healing. M157 for heart + brain protocol.',
      tag: 'SAVORY'
    }
  ];

  return (
    <main className="min-h-screen bg-[#051B11] text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-black text-[#D4AF37] mb-4 uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
            ZAP SAUCE
          </h1>

          <div className="flex gap-3 justify-center mb-6 text-sm flex-wrap">
            <a href="/track" className="text-[#D4AF37] hover:text-white border border-[#D4AF37] px-4 py-2 rounded font-black uppercase tracking-wider transition-colors">
              FREE RECIPE
            </a>
            <a href="/portal" className="text-emerald-400 hover:text-white border border-emerald-400 px-4 py-2 rounded font-black uppercase tracking-wider transition-colors">
              MY HEAL ⚡
            </a>
            <a href="/admin" className="text-gray-600 hover:text-[#D4AF37] px-4 py-2 rounded font-black uppercase tracking-wider transition-colors">
              VAULT
            </a>
          </div>

          <p className="text-lg text-gray-300 mb-2 font-montserrat font-semibold">
            What hurts? We have a recipe for that.
          </p>
          <p className="text-sm text-gray-500 font-montserrat">
            1 teaspoon daily = Your immune system on guard.
          </p>
          
          <p className="text-center text-xs text-emerald-400 mt-4 font-montserrat font-bold">
            47 healers joined this week. 3 spots left at M120.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#0A2E1D] border-2 border-[#1B4332] rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-gray-500 font-montserrat mb-1 uppercase font-bold">FREE</p>
                <h2 className="text-3xl font-black text-emerald-400 uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  FREE SAMPLE
                </h2>
                <p className="text-sm text-gray-400 font-montserrat font-semibold">Turmeric Starter</p>
              </div>
              <span className="bg-emerald-500 text-[#051B11] text-xs font-black px-3 py-1 rounded uppercase">
                FREE
              </span>
            </div>
            <div className="mb-4">
              <p className="text-xs text-[#D4AF37] font-montserrat mb-2 uppercase font-bold">CURES:</p>
              <ul className="space-y-1 text-sm text-gray-300 font-montserrat font-medium">
                <li>✓ First-time inflammation test</li>
                <li>✓ Morning energy boost</li>
                <li>✓ Beginner-friendly intro</li>
                <li>✓ Taste before you invest</li>
              </ul>
            </div>
            <div className="bg-[#051B11] p-3 rounded mb-4 text-xs text-gray-400 font-montserrat">
              Proof it works. Simple 3-ingredient version. No payment needed. Tap to unlock instantly.
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-black text-white uppercase">FREE</p>
                <p className="text-xs text-gray-500 font-montserrat">Tap to view instantly</p>
              </div>
              <a href="/track" className="bg-emerald-500 hover:bg-emerald-400 text-[#051B11] font-black px-6 py-3 rounded uppercase tracking-wider transition-colors">
                GET FREE 🔓
              </a>
            </div>
          </div>

          <div className="bg-[#0A2E1D] border-2 border-[#D4AF37] rounded-lg p-6 relative">
            <div className="absolute -top-3 -right-3 bg-[#D4AF37] text-[#051B11] text-xs font-black px-3 py-1 rounded uppercase">
              AUTO
            </div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-gray-500 font-montserrat mb-1 uppercase font-bold">MONTHLY</p>
                <h2 className="text-3xl font-black text-[#D4AF37] uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  MONTHLY HEAL
                </h2>
                <p className="text-sm text-gray-400 font-montserrat font-semibold">Auto-Restock Plan</p>
              </div>
            <div className="mb-4">
              <p className="text-xs text-[#D4AF37] font-montserrat mb-2 uppercase font-bold">CURES:</p>
              <ul className="space-y-1 text-sm text-gray-300 font-montserrat font-medium">
                <li>✓ Never run out of Zap Sauce</li>
                <li>✓ Save M20 vs buying single monthly</li>
                <li>✓ Priority WhatsApp support</li>
                <li>✓ Cancel anytime via WhatsApp</li>
              </ul>
            </div>
            <div className="bg-[#051B11] p-3 rounded mb-4 text-xs text-gray-400 font-montserrat">
              Join 30-day healing cycle. M120/month. We remind you day 28. You stay stocked. Cancel anytime via WhatsApp STOP.
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-black text-white uppercase">M120</p>
                <p className="text-xs text-gray-500 font-montserrat">M120/month · Cancel anytime</p>
                <p className="text-xs text-gray-600 font-montserrat">Outside Lesotho? EFT →</p>
              </div>
              <button onClick={handleSubscribe} className="bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black px-6 py-3 rounded uppercase tracking-wider transition-colors">
                SUBSCRIBE 🔓
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-2 text-right font-montserrat">
              Dialer opens → Press 1 → Send
            </p>
          </div>
        </div>

        <div className="bg-[#0A2E1D] border-2 border-[#D4AF37] rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-xs text-gray-500 font-montserrat mb-1 uppercase font-bold">BUNDLE</p>
              <h2 className="text-3xl font-black text-[#D4AF37] uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
                PACK - ALL 5
              </h2>
              <p className="text-sm text-gray-400 font-montserrat font-semibold">Full arsenal. Save M164</p>
            </div>
            <span className="bg-[#D4AF37] text-[#051B11] text-xs font-black px-3 py-1 rounded uppercase">
              BEST VALUE
            </span>
          </div>
          <div className="bg-[#051B11] p-3 rounded mb-4 text-xs text-gray-400 font-montserrat">
            Get ORIGINAL + CITRUS + PRO + QUEEN + BONE. M811 value. Pay M647. Save M164. Full family protection.
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-3xl font-black text-white uppercase">M647</p>
              <p className="text-xs text-gray-500 font-montserrat line-through">M811</p>
              <p className="text-xs text-emerald-400 font-montserrat font-bold">Save M164</p>
            </div>
            <button onClick={() => handleMpesa(647, 'PACK')} className="bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black px-6 py-3 rounded uppercase tracking-wider transition-colors">
              MPESA PACK 🔒
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.ref} className="bg-[#0A2E1D] border-2 border-[#1B4332] rounded-lg p-6 relative">
              {p.tag && (
                <span className="absolute -top-3 -right-3 bg-orange-500 text-white text-xs font-black px-3 py-1 rounded uppercase">
                  {p.tag}
                </span>
              )}
              <div className="mb-4">
                <p className="text-xs text-gray-500 font-montserrat mb-1 uppercase font-bold">RECIPE</p>
                <h3 className="text-2xl font-black uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif', color: p.color}}>
                  {p.name}
                </h3>
                <p className="text-sm text-gray-400 font-montserrat font-semibold">{p.subtitle}</p>
              </div>
              <div className="mb-4">
                <p className="text-xs text-[#D4AF37] font-montserrat mb-2 uppercase font-bold">FOR:</p>
                <ul className="space-y-1 text-sm text-gray-300 font-montserrat font-medium">
                  {p.cures.map((c, i) => (
                    <li key={i}>✓ {c}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#051B11] p-3 rounded mb-4 text-xs text-gray-400 font-montserrat">
                {p.desc}
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-3xl font-black text-white uppercase">M{p.price}</p>
                  <p className="text-xs text-gray-600 font-montserrat">Ref: {p.ref}</p>
                </div>
                <button
                  onClick={() => handleMpesa(p.price, p.ref)}
                  className="bg-gray-700 hover:bg-gray-600 text-white font-black px-6 py-3 rounded uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  MPESA 🔒
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-2 text-right font-montserrat">
                Mpesa instant · EFT manual unlock
              </p>
            </div>
          ))}
        </div>

        {copied && (
          <div className="fixed bottom-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded font-black uppercase">
            USSD COPIED ✓
          </div>
        )}

        <a 
          href="https://wa.me/26657031600?text=I%20need%20ZAP%20SAUCE%20⚡%20Help%20me%20heal" 
          className="fixed bottom-4 left-4 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full font-black text-sm shadow-lg z-50 transition-colors flex items-center gap-2"
        >
          WHATSAPP US ⚡
        </a>

        <footer className="text-center mt-16 pb-8">
          <p className="text-xs text-gray-600 font-montserrat">
            Zap Sauce © 2026 | Lesotho 🇱🇸 | For considered healers
          </p>
          <p className="text-xs text-gray-700 font-montserrat mt-2">
            Not medical advice. Natural food. Consult doctor for serious conditions.
          </p>
        </footer>
      </div>
    </main>
  );
}