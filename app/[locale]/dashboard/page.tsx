'use client'
import { useEffect } from 'react'

export default function DashboardHome({
  searchParams,
}: {
  searchParams: { token: string; code: string }
}) {
  useEffect(() => {
    if (!searchParams.token || !searchParams.code) return
    localStorage.setItem('tokenSigned', searchParams.token)
    localStorage.setItem('codeSigned', searchParams.code)

    location.href = '/dashboard'
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <></>
}
