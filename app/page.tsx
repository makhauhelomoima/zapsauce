'use client';
import { useState } from 'react';

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const price = 120;
  const total = quantity * price;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* HERO SECTION */}
        <div className="text-center mb-12">
          <h1 className="font-bebas text-6xl md:text-8xl text-gold-500 mb-4 tracking-wider">
            ZAP SAUCE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-montserrat">
            Turmeric Gold • Honey Heat • Royal Relief
          </p>
        </div>

        {/* PRODUCT IMAGE - PLACEHOLDER WORKS */}
        <div className="mb-12 rounded-lg overflow-hidden border-2 border-gold-500/30">
          <img 
            src="https://i.imgur.com/8QmYQZL.jpg" 
            alt="Zap Sauce Turmeric Honey" 
            className="w-full h-auto"
          />
        </div>

        {/* STORY */}
        <div className="bg-zinc-900/50 p-8 rounded-lg border border-gold-500/20 mb-12">
          <h2 className="font-bebas text-4xl text-gold-500 mb-4">THE STORY</h2>
          <p className="text-gray-300 font-montserrat leading-relaxed mb-4">
            Born at 00:58 in Maseru. Stirred with intention. Crafted for queens who demand relief without compromise.
          </p>
          <p className="text-gray-300 font-montserrat leading-relaxed">
            Raw honey meets organic turmeric. Anti-inflammatory. Immunity boosting. Joint soothing. 
            <span className="text-gold-500 font-bold"> This is not medicine. This is royalty.</span>
          </p>
        </div>

        {/* ORDER SECTION */}
        <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-lg border-2 border-gold-500">
          <h2 className="font-bebas text-4xl text-gold-500 mb-6 text-center">ORDER NOW</h2>
          
          <div className="mb-6">
            <label className="block text-gray-400 font-montserrat mb-2">Quantity</label>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-zinc-800 text-gold-500 w-12 h-12 rounded-lg text-2xl font-bold hover:bg-zinc-700"
              >-</button>
              <span className="text-4xl font-bebas text-white w-16 text-center">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="bg-zinc-800 text-gold-500 w-12 h-12 rounded-lg text-2xl font-bold hover:bg-zinc-700"
              >+</button>
            </div>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 font-montserrat">Total</p>
            <p className="text-5xl font-bebas text-gold-500">M{total}</p>
            <p className="text-sm text-gray-500 font-montserrat">M{price} per jar</p>
          </div>

          <a 
            href={`https://wa.me/26657031600?text=I%20want%20to%20order%20${quantity}%20x%20Zap%20Sauce%20Total%20M${total}`}
            className="block w-full bg-gold-500 text-black text-center py-4 rounded-lg font-bebas text-2xl tracking-wider hover:bg-gold-400 transition"
          >
            ORDER VIA WHATSAPP
          </a>
          
          <p className="text-center text-gray-500 text-xs mt-4 font-montserrat">
            Pay via Mpesa. Delivery in Maseru. T&C Apply.
          </p>
        </div>

        {/* FOOTER */}
        <div className="text-center mt-12 text-gray-600 text-sm font-montserrat">
          <p>© 2026 Zap Sauce. Crafted in Lesotho 🇱🇸</p>
          <p className="mt-2">For considered queens. With considered ingredients.</p>
        </div>

      </div>
    </main>
  );
        }
