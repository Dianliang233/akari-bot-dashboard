'use client'

import { useI18n } from '@/locale/client'
import { Button } from '@/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const t = useI18n()
  const pathname = usePathname()

  const links = { [t('pages.home.title')]: '/dashboard' }

  return (
    <div className="border-stone-300 border-r h-full col-span-1 max-w-sm">
      <div className="flex flex-col p-1 gap-1">
        {Object.entries(links).map(([name, link]) => (
          <Button
            variant="ghost"
            className={`justify-start ${pathname === link ? 'font-bold' : ''}`}
            key={link}
            asChild
          >
            <Link href={link}>{name}</Link>
          </Button>
        ))}
      </div>
    </div>
  )
}
