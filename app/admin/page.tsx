'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://twnkxgblxtjrqihxzsjl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3bmt4Z2JseHRqcnFpaHh6c2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NjIzMTgsImV4cCI6MjA5MzQzODMxOH0.-3zeeVyK8WbcForwd5zsaxSULUqmXQGPn_to-mBR9Zg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminVault() {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (password === 'HEAL120') {
      setLoggedIn(true);
      fetchOrders();
    } else {
      alert('Wrong password, my Queen 🤍');
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    const { data } = await supabase
.from('zap_orders')
.select('*')
.order('created_at', { ascending: false });
    setOrders(data || []);
    setLoading(false);
  };

  const verifyOrder = async (id: string) => {
    await supabase
.from('zap_orders')
.update({ payment_status: 'verified', paid_at: new Date().toISOString() })
.eq('id', id);
    fetchOrders();
  };

  if (!loggedIn) {
    return (
      <main className="min-h-screen bg-[#051B11] text-white flex items-center justify-center p-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
        <div className="bg-[#0A2E1D] p-8 rounded-lg border-2 border-[#D4AF37] w-full max-w-sm">
          <h1 className="text-3xl font-black text-[#D4AF37] mb-6 text-center uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
            ZAP SAUCE VAULT ⚡
          </h1>
          <p className="text-sm text-gray-400 mb-4 text-center font-montserrat font-semibold">
            Admin access only
          </p>
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            className="w-full p-3 mb-4 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat font-medium text-center uppercase"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
          />
          <button
            onClick={login}
            className="w-full bg-[#D4AF37] hover:bg-[#F4B400] text-[#051B11] font-black p-3 rounded uppercase tracking-wider transition-colors"
          >
            ENTER VAULT
          </button>
          <p className="text-xs text-gray-600 mt-4 text-center font-montserrat">
            Forgot? Check your Notes app 🤍
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#051B11] text-white p-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black text-[#D4AF37] uppercase tracking-tight" style={{fontFamily: 'Montserrat, sans-serif'}}>
            VAULT DASHBOARD ⚡
          </h1>
          <button
            onClick={() => setLoggedIn(false)}
            className="text-red-500 hover:text-red-400 font-black uppercase text-sm"
          >
            LOGOUT
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-emerald-500">
            <p className="text-gray-400 text-sm font-montserrat uppercase font-bold">TOTAL ORDERS</p>
            <p className="text-3xl font-black text-white">{orders.length}</p>
          </div>
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-[#D4AF37]">
            <p className="text-gray-400 text-sm font-montserrat uppercase font-bold">VERIFIED</p>
            <p className="text-3xl font-black text-emerald-400">{orders.filter(o => o.payment_status === 'verified').length}</p>
          </div>
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-red-500">
            <p className="text-gray-400 text-sm font-montserrat uppercase font-bold">PENDING</p>
            <p className="text-3xl font-black text-red-400">{orders.filter(o => o.payment_status === 'pending').length}</p>
          </div>
        </div>

        <div className="bg-[#0A2E1D] p-6 rounded border-2 border-[#1B4332]">
          <h2 className="text-2xl font-black text-[#D4AF37] mb-4 uppercase tracking-tight">ORDERS</h2>
          {loading ? (
            <p className="text-gray-400 font-montserrat">Loading...</p>
          ) : (
            <div className="space-y-3">
              {orders.map(o => (
                <div key={o.id} className="border border-[#1B4332] p-4 rounded flex justify-between items-center">
                  <div>
                    <p className="text-white font-montserrat font-bold uppercase">{o.customer_name} - {o.customer_whatsapp}</p>
                    <p className="text-gray-400 text-sm font-montserrat">Ref: {o.ref} | M{o.amount_maloti} | Mpesa: {o.mpesa_code}</p>
                    <p className="text-gray-500 text-xs font-montserrat">{new Date(o.created_at).toLocaleString('en-GB')}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-black uppercase text-sm mb-2 ${o.payment_status === 'verified' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {o.payment_status}
                    </p>
                    {o.payment_status === 'pending' && (
                      <button
                        onClick={() => verifyOrder(o.id)}
                        className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-4 py-2 rounded text-xs uppercase"
                      >
                        VERIFY ✓
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
