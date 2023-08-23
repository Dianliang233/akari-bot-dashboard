import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import { Button } from '@/app/ui/button'
import { getI18n } from '@/app/locale/server'
import { redirect } from 'next/navigation'
import { randomBytes } from 'crypto'

export default async function LoginToken({
  searchParams,
}: {
  searchParams: { user: string }
}) {
  async function handleSubmit(data: FormData) {
    'use server'
  }

  const t = await getI18n()
  const token = randomBytes(8).toString('hex')

  return (
    <>
      <h1 className="text-2xl font-bold mb-3">{t('login.title')}</h1>
      <code className="mb-2 font-semibold">{searchParams.user}</code>
      <p className="mb-5">
        {t('login.tokenHelp', {
          token: <code>~token {token}</code>,
        })}
      </p>
      <form
        className="grid w-full max-w-sm items-center gap-2"
        action={handleSubmit}
      >
        <Label htmlFor="token">{t('login.token')}</Label>
        <Input
          type="text"
          name="token"
          id="token"
          placeholder="eyJhbGciOiJIUzI1NiIsI..."
        />
        <Button type="submit">{t('login.next')}</Button>
      </form>
    </>
  )
}
