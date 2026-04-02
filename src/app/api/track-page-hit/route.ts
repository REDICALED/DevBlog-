import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseRoleKey = process.env.SUPABASE_ROLE_KEY

    if (!supabaseUrl || !supabaseRoleKey) {
      return NextResponse.json(
        { ok: false, message: 'Supabase env is missing' },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, supabaseRoleKey)

    const body = await req.json()
    const forwardedFor = req.headers.get('x-forwarded-for')
    const realIp = req.headers.get('x-real-ip')

    const ip =
      forwardedFor?.split(',')[0]?.trim() ||
      realIp ||
      null

    const { page, visitorId, referrer, userAgent } = body

    const { error } = await supabase.from('page_hits').insert({
      page,
      visitor_id: visitorId,
      referrer,
      user_agent: userAgent,
      ip_address: ip,
      created_at: new Date().toISOString(),
    })

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: false, error: 'Unknown error' }, { status: 500 })
  }
}
