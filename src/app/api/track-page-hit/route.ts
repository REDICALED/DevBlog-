import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function detectBot(params: {
  userAgent: string | null
  secChUa: string | null
  acceptLanguage: string | null
  secFetchSite: string | null
  secFetchMode: string | null
  secFetchDest: string | null
}) {
  const {
    userAgent,
    secChUa,
    acceptLanguage,
    secFetchSite,
    secFetchMode,
    secFetchDest,
  } = params

  const ua = (userAgent || '').toLowerCase()

  const botPattern =
    /bot|crawler|spider|curl|wget|python|node|axios|go-http-client|postman|insomnia|headless|puppeteer|playwright|selenium|googleother|googlebot/

  if (botPattern.test(ua)) {
    return true
  }

  if (!secChUa) {
    return true
  }

  if (!acceptLanguage) {
    return true
  }

  if (!secFetchSite || !secFetchMode || !secFetchDest) {
    return true
  }

  return false
}

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

    const body = await req.json().catch(() => ({}))

    const forwardedFor = req.headers.get('x-forwarded-for')
    const realIp = req.headers.get('x-real-ip')
    const refererHeader = req.headers.get('referer')
    const userAgentHeader = req.headers.get('user-agent')
    const secChUa = req.headers.get('sec-ch-ua')
    const secChUaMobile = req.headers.get('sec-ch-ua-mobile')
    const secChUaPlatform = req.headers.get('sec-ch-ua-platform')
    const accept = req.headers.get('accept')
    const acceptLanguage = req.headers.get('accept-language')
    const secFetchSite = req.headers.get('sec-fetch-site')
    const secFetchMode = req.headers.get('sec-fetch-mode')
    const secFetchDest = req.headers.get('sec-fetch-dest')
    const purpose = req.headers.get('purpose')
    const xRequestedWith = req.headers.get('x-requested-with')

    const ip =
      forwardedFor?.split(',')[0]?.trim() ||
      realIp ||
      null

    const { page, visitorId, referrer } = body ?? {}

    const isBotSuspected = detectBot({
      userAgent: userAgentHeader,
      secChUa,
      acceptLanguage,
      secFetchSite,
      secFetchMode,
      secFetchDest,
    })

    const { error } = await supabase.from('page_hits').insert({
      page,
      visitor_id: visitorId,
      referrer: referrer || refererHeader,
      user_agent: userAgentHeader,
      ip_address: ip,
      x_forwarded_for: forwardedFor,
      x_real_ip: realIp,
      sec_ch_ua: secChUa,
      sec_ch_ua_mobile: secChUaMobile,
      sec_ch_ua_platform: secChUaPlatform,
      accept,
      accept_language: acceptLanguage,
      sec_fetch_site: secFetchSite,
      sec_fetch_mode: secFetchMode,
      sec_fetch_dest: secFetchDest,
      purpose,
      x_requested_with: xRequestedWith,
      is_bot_suspected: isBotSuspected,
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
