'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://twnkxgblxtjrqihxzsjl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3bmt4Z2JseHRqcnFpaHh6c2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NjIzMTgsImV4cCI6MjA5MzQzODMxOH0.-3zeeVyK8WbcForwd5zsaxSULUqmXQGPn_to-mBR9Zg';
const supabase = createClient(supabaseUrl, supabaseKey);

const ADMIN_PASSWORD = 'Green2026Maseru!'; // CHANGE THIS

type Order = {
  id: number;
  product_ref: string;
  product_name: string;
  amount_maloti: number;
  customer_name: string;
  customer_whatsapp: string;
  mpesa_code: string;
  payment_status: string;
  pdf_sent: boolean;
  created_at: string;
  paid_at: string;
  sent_at: string;
};

export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [todayStats, setTodayStats] = useState({ count: 0, total: 0 });
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      fetchOrders();
    } else {
      alert('Wrong password, my Queen 🤍');
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
     .from('zap_orders')
     .select('*')
     .order('created_at', { ascending: false })
     .limit(50);

    if (error) {
      console.error('Error fetching orders:', error);
      alert('Supabase error. Check RLS or table exists.');
    } else if (data) {
      setOrders(data);
    }

    const today = new Date().toISOString().split('T')[0];
    const { data: stats, error: statsError } = await supabase
     .from('zap_orders')
     .select('amount_maloti')
     .eq('payment_status', 'verified')
     .gte('paid_at', today);

    if (statsError) {
      console.error('Error fetching stats:', statsError);
    } else if (stats) {
      const total = stats.reduce((sum, o) => sum + Number(o.amount_maloti), 0);
      setTodayStats({ count: stats.length, total });
    }
    setLoading(false);
  };

  const markSent = async (id: number) => {
    const { error } = await supabase
     .from('zap_orders')
     .update({ pdf_sent: true, sent_at: new Date().toISOString() })
     .eq('id', id);

    if (error) {
      alert('Error marking sent: ' + error.message);
    } else {
      fetchOrders();
    }
  };

  const addOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const { error } = await supabase.from('zap_orders').insert({
      product_ref: formData.get('ref') as string,
      product_name: formData.get('name') as string,
      amount_maloti: Number(formData.get('amount')),
      customer_name: formData.get('customer') as string,
      customer_whatsapp: formData.get('whatsapp') as string,
      mpesa_code: formData.get('mpesa') as string,
      payment_status: 'verified',
      paid_at: new Date().toISOString()
    });

    if (error) {
      alert('Error adding order: ' + error.message);
    } else {
      form.reset();
      fetchOrders();
    }
    setLoading(false);
  };

  const deleteOrder = async (id: number) => {
    if (confirm('Delete this order? Cannot undo.')) {
      const { error } = await supabase.from('zap_orders').delete().eq('id', id);
      if (error) {
        alert('Error deleting: ' + error.message);
      } else {
        fetchOrders();
      }
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-[#051B11] text-white flex items-center justify-center p-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
        <div className="bg-[#0A2E1D] p-8 rounded-lg border-2 border-[#D4AF37] w-full max-w-sm">
          <h1 className="text-3xl font-black text-[#D4AF37] mb-6 text-center" style={{fontFamily: 'Bebas Neue, cursive'}}>
            ZAP SAUCE VAULT ⚡
          </h1>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full p-3 mb-4 bg-[#051B11] rounded text-white border border-[#1B4332] font-montserrat"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && login()}
          />
          <button
            onClick={login}
            className="w-full bg-[#D4AF37] text-[#051B11] font-bold p-3 rounded font-bebas text-lg tracking-wider"
          >
            ENTER VAULT
          </button>
          <p className="text-xs text-gray-500 mt-4 text-center font-montserrat">For considered founders only 🤍</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#051B11] text-white p-4" style={{fontFamily: 'Montserrat, sans-serif'}}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-[#D4AF37]" style={{fontFamily: 'Bebas Neue, cursive'}}>
            ZAP SAUCE DASHBOARD ⚡
          </h1>
          <button
            onClick={() => setLoggedIn(false)}
            className="text-xs text-gray-500 hover:text-red-400 font-montserrat"
          >
            LOGOUT
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-[#1B4332]">
            <p className="text-gray-400 text-sm font-montserrat">SALES TODAY</p>
            <p className="text-4xl font-black text-white font-bebas">{loading? '...' : todayStats.count}</p>
          </div>
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-[#1B4332]">
            <p className="text-gray-400 text-sm font-montserrat">BANKED TODAY</p>
            <p className="text-4xl font-black text-emerald-400 font-bebas">M{loading? '...' : todayStats.total}</p>
          </div>
          <div className="bg-[#0A2E1D] p-6 rounded border-2 border-[#D4AF37]">
            <p className="text-gray-400 text-sm font-montserrat">JUNE TARGET</p>
            <p className="text-4xl font-black text-[#D4AF37] font-bebas">M{todayStats.total}/6000</p>
            <div className="w-full bg-[#051B11] rounded-full h-2 mt-2">
              <div
                className="bg-[#D4AF37] h-2 rounded-full transition-all"
                style={{width: `${Math.min((todayStats.total/6000)*100, 100)}%`}}
              ></div>
            </div>
          </div>
        </div>

        <form onSubmit={addOrder} className="bg-[#0A2E1D] p-6 rounded mb-8 border-2 border-[#D4AF37]">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-4 font-bebas">ADD MPESA ORDER</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <input name="customer" placeholder="Customer Name" className="p-3 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat" required/>
            <input name="whatsapp" placeholder="26657031600" className="p-3 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat" required/>
            <input name="mpesa" placeholder="Mpesa Code" className="p-3 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat" required/>
            <input name="ref" placeholder="ZAP/PRO/QUEEN" className="p-3 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat" required/>
            <input name="name" placeholder="Product Name" className="p-3 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat" required/>
            <input name="amount" type="number" placeholder="Amount M120" className="p-3 bg-[#051B11] rounded border border-[#1B4332] text-white font-montserrat" required/>
          </div>
          <button
            disabled={loading}
            className="mt-4 bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded font-bold font-bebas text-lg tracking-wider disabled:opacity-50"
          >
            {loading? 'SAVING...' : 'ADD SALE + SAVE'}
          </button>
        </form>

        <div className="bg-[#0A2E1D] rounded border-2 border-[#1B4332]">
          <h2 className="text-2xl font-bold p-4 text-[#D4AF37] font-bebas">RECENT ORDERS</h2>
          {loading && orders.length === 0? (
            <p className="p-4 text-gray-500 font-montserrat">Loading orders...</p>
          ) : orders.length === 0? (
            <p className="p-4 text-gray-500 font-montserrat">No orders yet. Add your first M120 above.</p>
          ) : (
            orders.map(o => (
              <div key={o.id} className="border-t border-[#1B4332] p-4 flex flex-col md:flex-row justify-between md:items-center gap-3">
                <div>
                  <p className="font-bold text-white font-montserrat">
                    {o.customer_name} | M{o.amount_maloti} | {o.product_name}
                  </p>
                  <p className="text-sm text-gray-400 font-montserrat">
                    Mpesa: {o.mpesa_code} | {new Date(o.created_at).toLocaleString('en-GB')}
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${o.customer_whatsapp.replace(/^0/, '266')}`}
                    target="_blank"
                    className="bg-emerald-600 hover:bg-emerald-500 px-3 py-1 rounded text-sm font-bebas"
                  >
                    WHATSAPP
                  </a>
                  {!o.pdf_sent? (
                    <button
                      onClick={() => markSent(o.id)}
                      className="bg-[#D4AF37] text-[#051B11] px-3 py-1 rounded text-sm font-bold font-bebas"
                    >
                      MARK SENT
                    </button>
                  ) : (
                    <span className="text-emerald-400 text-sm font-bebas">✓ SENT</span>
                  )}
                  <button
                    onClick={() => deleteOrder(o.id)}
                    className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded text-sm font-bebas"
                  >
                    DEL
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <p className="text-center text-gray-600 text-xs mt-8 font-montserrat">
          Zap Sauce Admin v1.0 | {new Date().toLocaleDateString('en-GB')} | Lesotho 🇱🇸
        </p>
      </div>
    </div>
  );
}