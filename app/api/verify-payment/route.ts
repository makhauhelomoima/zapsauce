import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { recipes, packages } from '../../../data/recipes'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  const { recipeId, method, code, phone, email } = await req.json()

  const allProducts = [...recipes, ...Object.values(packages).map(p => ({
    id: p.id,
    price: p.price,
    name: p.name
  }))]
  const product = allProducts.find(p => p.id === recipeId)
  
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  const isValid = method === 'mpesa' ? code.length >= 8 : code.length >= 3
  if (!isValid) {
    return NextResponse.json({ error: 'Invalid payment code' }, { status: 400 })
  }

  let { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('whatsapp_number', phone)
    .single()

  if (!user) {
    const { data: newUser } = await supabase
      .from('users')
      .insert({ whatsapp_number: phone, email })
      .select()
      .single()
    user = newUser
  }

  const { data: payment, error: paymentError } = await supabase
    .from('payments')
    .insert({
      user_id: user.id,
      product_id: recipeId,
      amount: product.price,
      method,
      reference_code: code,
      status: 'pending'
    })
    .select()
    .single()

  if (paymentError) {
    return NextResponse.json({ error: 'Payment save failed' }, { status: 500 })
  }

  return NextResponse.json({
    success: true,
    message: `${method.toUpperCase()} submitted! Awaiting admin confirmation. Check WhatsApp for PDF ⚡`,
    paymentId: payment.id
  })
}