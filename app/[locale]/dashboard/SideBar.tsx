'use client'

import { useI18n } from '@/app/locale/client'
import { Button } from '@/app/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideBar() {
  const t = useI18n()
  const pathname = usePathname()

  const links = { [t('home')]: '/dash' }

  return (
    <div className="border-stone-300 border-r h-full col-span-1 max-w-sm">
      <div className="flex flex-col p-1 gap-1">
        {Object.entries(links).map(([name, link]) => (
          <Button
            variant="ghost"
            className={`justify-start ${pathname === link ? '' : ''}`}
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
