import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { recipes, packages } from '../../../data/recipes'

// Force dynamic - no pre-rendering at build time
export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function POST(req: NextRequest) {
  // Create Supabase client INSIDE function - not at build time
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { recipeId, method, code, phone, email } = await req.json()

    // Validate input
    if (!recipeId ||!method ||!code) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get all products: recipes + packages
    const allProducts = [
     ...recipes,
     ...Object.values(packages).map(p => ({
        id: p.id,
        price: p.price,
        name: p.name
      }))
    ]

    // Find the product
    const product = allProducts.find(p => p.id === recipeId)

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Validate payment code
    const isValid = method === 'mpesa'? code.length >= 8 : code.length >= 3

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid payment code format' },
        { status: 400 }
      )
    }

    // Insert payment into Supabase
    const { data, error } = await supabase
     .from('payments')
     .insert([{
        recipe_id: recipeId,
        product_name: product.name,
        method: method,
        reference_code: code,
        phone: phone || null,
        email: email || null,
        amount: product.price,
        status: 'pending',
        created_at: new Date().toISOString()
      }])
     .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Database error: ' + error.message },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Payment submitted for verification',
      data: data[0]
    })

  } catch (error: any) {
    console.error('Route error:', error)
    return NextResponse.json(
      { error: 'Server error: ' + error.message },
      { status: 500 }
    )
  }
}