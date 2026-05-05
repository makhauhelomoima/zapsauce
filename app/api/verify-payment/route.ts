import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.https://twnkxgblxtjrqihxzsjl.supabase.co!,
  process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3bmt4Z2JseHRqcnFpaHh6c2psIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Nzg2MjMxOCwiZXhwIjoyMDkzNDM4MzE4fQ.D2dWgYNC3lDgvtm6RoDmrGRlMs1UAwh0XRdRG43Ka4Q!
)

export async function POST(req: NextRequest) {
  const { recipe_id, method, code, phone } = await req.json()

  // 1. Get or create user
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

  // 2. Get recipe
  const { data: recipe } = await supabase
    .from('recipes')
    .select('*')
    .eq('id', recipe_id)
    .single()

  if (!recipe) return NextResponse.json({ error: 'Recipe not found' }, { status: 404 })

  // 3. Verify payment - In production: Call Vodacom API or Bank API
  // For now: Accept any 8-digit MPESA or any EFT ref with "ZAP"
  const isValid = method === 'mpesa' 
    ? code.length === 8 
    : code.toUpperCase().includes('ZAP')

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid payment code' }, { status: 400 })
  }

  // 4. Record payment
  const { data: payment } = await supabase
    .from('payments')
    .insert({
      user_id: user.id,
      recipe_id,
      amount: recipe.price,
      method,
      mpesa_code: method === 'mpesa'? code : null,
      eft_reference: method === 'eft'? code : null,
      status: 'confirmed',
      confirmed_at: new Date().toISOString()
    })
    .select()
    .single()

  // 5. Unlock recipe
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