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
          <h1 className="text-3xl font-black text-[#D4AF37] mb-6 text-center uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
            ZAP SAUCE PORTAL ⚡
          </h1>
          <p className="text-sm text-gray-400 mb-4 text-center font-montserrat font-semibold">
            Enter your WhatsApp + last Mpesa code to view subscription
          </p>
          <input
            type="text"
            placeholder="26657031600"
            className="w-full p-3 mb-3 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat font-medium"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mpesa Code QK123ABC"
            className="w-full p-3 mb-4 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat font-medium"
            value={mpesaCode}
            onChange={e => setMpesaCode(e.target.value)}
          />
          <button
            onClick={login}
            disabled={loading}
            className="w-full bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black p-3 rounded uppercase tracking-wider disabled:opacity-50 transition-colors"
          >
            {loading? 'CHECKING...' : 'VIEW MY HEAL'}
          </button>
          <p className="text-xs text-gray-600 mt-4 text-center font-montserrat">
            First time? Pay M120 via homepage first
          </p>
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
        <h1 className="text-4xl font-black text-[#D4AF37] mb-2 uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
          HELLO {customer.customer_name} ⚡
        </h1>
        <p className="text-gray-400 mb-8 font-montserrat font-semibold">Your MONTHLY HEAL dashboard</p>

        <a href="/monthly-heal.pdf" download className="w-full bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black p-4 rounded uppercase tracking-wider text-center block mb-6 transition-colors">
          DOWNLOAD WELCOME KIT PDF 📄⚡
        </a>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-emerald-500">
            <p className="text-gray-400 text-sm font-montserrat uppercase font-bold">STATUS</p>
            <p className="text-3xl font-black text-emerald-400 uppercase">ACTIVE</p>
          </div>
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-[#D4AF37]">
            <p className="text-gray-400 text-sm font-montserrat uppercase font-bold">NEXT M120 DUE</p>
            <p className="text-3xl font-black text-white uppercase">{daysLeft} DAYS</p>
            <p