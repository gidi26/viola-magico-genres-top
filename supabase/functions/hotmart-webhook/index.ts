import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Parse the webhook payload
    const payload = await req.json()
    console.log('Hotmart webhook received:', payload)

    // Extract user data from Hotmart payload
    const {
      data: {
        buyer: {
          name,
          email,
          document: cpf
        },
        product: {
          id: product_id,
          name: product_name
        },
        purchase: {
          transaction,
          status,
          date
        }
      }
    } = payload

    // Validate required fields
    if (!email || !name) {
      throw new Error('Missing required fields: email and name')
    }

    // Check if user already exists
    const { data: existingUser } = await supabaseClient
      .from('users')
      .select('id, email')
      .eq('email', email)
      .single()

    let userId

    if (existingUser) {
      // Update existing user
      const { data: updatedUser, error: updateError } = await supabaseClient
        .from('users')
        .update({
          name,
          cpf,
          updated_at: new Date().toISOString()
        })
        .eq('email', email)
        .select()
        .single()

      if (updateError) throw updateError
      userId = updatedUser.id
      console.log('User updated:', email)
    } else {
      // Create new user
      const { data: newUser, error: insertError } = await supabaseClient
        .from('users')
        .insert({
          name,
          email,
          cpf,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()
        .single()

      if (insertError) throw insertError
      userId = newUser.id
      console.log('New user created:', email)
    }

    // Log the purchase/enrollment
    const { error: purchaseError } = await supabaseClient
      .from('purchases')
      .insert({
        user_id: userId,
        product_id,
        product_name,
        transaction_id: transaction,
        status,
        purchase_date: date,
        created_at: new Date().toISOString()
      })

    if (purchaseError) {
      console.error('Error logging purchase:', purchaseError)
      // Don't throw here, user creation was successful
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'User processed successfully',
        user_id: userId
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error processing webhook:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'Internal server error'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})