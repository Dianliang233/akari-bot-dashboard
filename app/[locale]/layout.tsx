import { ReactElement } from 'react'
import Header from '@/app/template/Header'
import Footer from '@/app/template/Footer'

export default function SubLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
