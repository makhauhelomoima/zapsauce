'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://twnkxgblxtjrqihxzsjl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3bmt4Z2JseHRqcnFpaHh6c2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NjIzMTgsImV4cCI6MjA5MzQzODMxOH0.-3zeeVyK8WbcForwd5zsaxSULUqmXQGPn_to-mBR9Zg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CustomerPortal() {
  const [whatsapp, setWhatsapp] = useState('');
  const [mpesaCode, setMpesaCode] = useState('');
  const [customer, setCustomer] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    const { data, error } = await supabase
    .from('zap_orders')
    .select('*')
    .eq('customer_whatsapp', whatsapp)
    .eq('mpesa_code', mpesaCode)
    .eq('payment_status', 'verified')
    .order('paid_at', { ascending: false });

    if (error ||!data || data.length === 0) {
      alert('No subscription found. Check WhatsApp + Mpesa code.');
    } else {
      setCustomer(data[0]);
      setOrders(data);
    }
    setLoading(false);
  };

  const cancelSubscription = async () => {
    if (confirm('Cancel MONTHLY HEAL? You lose recipe access.')) {
      alert('Subscription cancelled. Email support@zapsauce.com to reactivate.');
      setCustomer(null);
      setOrders([]);
    }
  };

  if (!customer) {
    return (
      <main className="min-h-screen bg-[#051B11] text-white flex items-center justify-center p-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
        <div className="bg-[#0A2E1D] p-8 rounded-lg border-2 border-[#D4AF37] w-full max-w-sm">
          <h1 className="text-3xl font-black text-[#D4AF37] mb-6 text-center" style={{fontFamily: 'Bebas Neue, cursive'}}>
            ZAP SAUCE PORTAL ⚡
          </h1>
          <p className="text-sm text-gray-400 mb-4 text-center font-montserrat">
            Enter your WhatsApp + last Mpesa code to view subscription
          </p>
          <input
            type="text"
            placeholder="26657031600"
            className="w-full p-3 mb-3 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mpesa Code QK123ABC"
            className="w-full p-3 mb-4 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat"
            value={mpesaCode}
            onChange={e => setMpesaCode(e.target.value)}
          />
          <button
            onClick={login}
            disabled={loading}
            className="w-full bg-[#D4AF37] text-[#051B11] font-bold p-3 rounded font-bebas text-lg tracking-wider disabled:opacity-50"
          >
            {loading? 'CHECKING...' : 'VIEW MY HEAL'}
          </button>
        </div>
      </main>
    );
  }

  const nextDue = new Date(customer.paid_at);
  nextDue.setDate(nextDue.getDate() + 28);
  const daysLeft = Math.ceil((nextDue.getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <main className="min-h-screen bg-[#051B11] text-white p-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-[#D4AF37] mb-2" style={{fontFamily: 'Bebas Neue, cursive'}}>
          HELLO {customer.customer_name} ⚡
        </h1>
        <p className="text-gray-400 mb-8 font-montserrat">Your MONTHLY HEAL dashboard</p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-emerald-500">
            <p className="text-gray-400 text-sm font-montserrat">STATUS</p>
            <p className="text-3xl font-black text-emerald-400 font-bebas">ACTIVE</p>
          </div>
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-[#D4AF37]">
            <p className="text-gray-400 text-sm font-montserrat">NEXT M120 DUE</p>
            <p className="text-3xl font-black text-white font-bebas">{daysLeft} DAYS</p>
            <p className="text-xs text-gray-500 font-montserrat">{nextDue.toLocaleDateString('en-GB')}</p>
          </div>
        </div>

        <div className="bg-[#0A2E1D] p-6 rounded border-2 border-[#1B4332] mb-6">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-4 font-bebas">ZAP SAUCE ORIGINAL RECIPE</h2>
          <div className="space-y-2 text-gray-300 font-montserrat text-sm">
            <p><strong className="text-white">1.</strong> Raw honey: 1 tablespoon</p>
            <p><strong className="text-white">2.</strong> Organic turmeric: 1 teaspoon</p>
            <p><strong className="text-white">3.</strong> Black pepper: Pinch</p>
            <p><strong className="text-white">4.</strong> Warm water: 200ml</p>
            <p className="text-[#D4AF37] pt-2">Mix. Drink every morning. Heal in 30 days.</