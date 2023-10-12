'use client'
import { useI18n } from '@/locale/client'
import { useEffect } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card'
import { trpc } from '@/trpc/client'
import { useAtom } from 'jotai'
import { credentialsAtom } from '@/store/account'
import { userStateSchema } from '@/types'

export default function DashboardHome({
  searchParams,
}: {
  searchParams: {
    tokenSigned: string
    codeSigned: string
    code: string
    user: string
  }
}) {
  const t = useI18n()

  const [credentials, setCredentials] = useAtom(credentialsAtom)
  if (userStateSchema.safeParse(searchParams).success) {
    setCredentials({ ...searchParams, loggedIn: true })
    location.href = '/dashboard'
  }

  console.log(trpc.sender.senderInfo.useQuery(credentials).data)

  return (
    <div className="">
      <h1 className="text-3xl font-extrabold mb-4">{t('pages.home.title')}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t('pages.home.whoIsThis')}</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {t('pages.home.id')}
              </p>
              <p className="text-sm text-muted-foreground">111</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}
