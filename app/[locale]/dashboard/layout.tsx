import { getI18n } from '@/app/locale/server'
import { ReactNode } from 'react'
import SideBar from './SideBar'

export default async function Layout({ children }: { children: ReactNode }) {
  const t = await getI18n()

  return (
    <div className="min-h-screen grid-cols-4 grid">
      <SideBar />
      <div className="col-span-3">{children}</div>
    </div>
  )
}
