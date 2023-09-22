'use client'

import { ReactNode } from 'react'
import { I18nProviderClient } from '@/app/locale/client'

export default function Providers({
  children,
  locale,
}: {
  children: ReactNode
  locale: string
}) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}
