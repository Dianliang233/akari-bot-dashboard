import Image from 'next/image'
import BannerImage from '@/app/assets/banner.png'
import { getI18n } from '@/app/locale/server'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
  const t = await getI18n()

  return (
    <div className="min-h-screen relative">
      <Image
        src={BannerImage}
        fill
        alt="An oil painting of the side profile of a woman surrounded by flowers"
        className="object-cover z-0"
      />
      <div className="bg-white absolute right-0 md:w-1/2 md:h-full z-10 px-5">
        <div className="container mx-auto px-4 py-8 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}
