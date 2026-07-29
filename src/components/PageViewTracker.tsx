'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    const trackPageView = async () => {
      try {
        let visitorId = localStorage.getItem('visitor_id')

        if (!visitorId) {
          visitorId = crypto.randomUUID()
          localStorage.setItem('visitor_id', visitorId)
        }

        await fetch('/api/track-page-hit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: pathname,
            visitorId,
            referrer: document.referrer || '',
          }),
        })
      } catch (error) {
        console.error('page tracking failed', error)
      }
    }

    trackPageView()
  }, [pathname])

  return null
}
