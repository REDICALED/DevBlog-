import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
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
      console.error(error)
      return NextResponse.json({ ok: false }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
