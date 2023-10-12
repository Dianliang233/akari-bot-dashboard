import { ReactElement } from 'react'
import Header from '@/template/Header'
import Footer from '@/template/Footer'
import Providers from './providers'

export default function SubLayout({
  children,
  params,
}: {
  children: ReactElement
  params: { locale: string }
}) {
  return (
    <Providers locale={params.locale}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Providers>
  )
}
