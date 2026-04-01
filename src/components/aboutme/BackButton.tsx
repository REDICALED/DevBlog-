'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
      return
    }

    router.push('/introduce')
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="underline underline-offset-4"
    >
      프로젝트 목록으로
    </button>
  )
}