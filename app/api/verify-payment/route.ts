import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

export async function POST(req: NextRequest) {
  const { recipe_id, method, code, phone } = await req.json()

  let { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('phone', phone)
    .single()

  if (!user) {
    const { data: newUser } = await supabase
      .from('users')
      .insert({ phone })
      .select()
      .single()
    user = newUser
  }

  const { data: recipe } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', recipe_id)
    .single()

  if (!recipe) return NextResponse.json({ error: 'Recipe not found' }, { status: 404 })

  const isValid = method === 'mpesa'
    ? code.length === 8
    : code.toUpperCase().includes('ZAP')

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid payment code' }, { status: 400 })
  }

  const { data: payment } = await supabase
    .from('payments')
    .insert({
      user_id: user.id,
      recipe_id,
      amount: recipe.price,
      method,
      mpesa_code: method === 'mpesa' ? code : null,
      eft_reference: method === 'eft' ? code : null,
      status: 'confirmed',
      confirmed_at: new Date().toISOString()
    })
    .select()
    .single()

  await supabase
    .from('recipe_unlocks')
    .insert({
      user_id: user.id,
      recipe_id,
      payment_id: payment.id,
      unlock_method: method
    })

  return NextResponse.json({
    success: true,
    message: 'Recipe unlocked!',
    recipe_id
  })
}