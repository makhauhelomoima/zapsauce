import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY! // Secret key, not public
)

export async function POST(req: NextRequest) {
  const data = await req.formData()
  
  // PayFast sends these fields
  const paymentStatus = data.get('payment_status')
  const itemName = data.get('item_name') as string
  const email = data.get('email_address') as string
  const amount = data.get('amount_gross') as string

  // Only unlock if payment complete
  if (paymentStatus === 'COMPLETE') {
    // Map item name to recipe ID
    const recipeMap: Record<string, string> = {
      'TANGY FUSION': 'tangy-fusion',
      'MONTHLY HEAL': 'monthly-heal-bundle',
      'FRANCHISE KIT': 'franchise-kit-bundle',
      'HUSTLERS VAULT': 'hustlers-vault-bundle'
    }

    const recipeId = recipeMap[itemName.toUpperCase()]
    
    if (recipeId && email) {
      // Insert into purchases table
      await supabase.from('purchases').insert({
        user_email: email,
        recipe_id: recipeId,
        amount_paid: parseFloat(amount),
        unlocked_at: new Date().toISOString()
      })
    }
  }

  return NextResponse.json({ received: true })
}