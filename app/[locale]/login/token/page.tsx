import { Input } from '@/ui/input'
import { Label } from '@/ui/label'
import { Button } from '@/ui/button'
import { getI18n } from '@/locale/server'
import { SignJWT } from 'jose'
import { randomBytes } from 'crypto'
import { redirect } from 'next/navigation'
import { validateUserState } from '@/routers/util/validateUserState'

export default async function LoginToken({
  searchParams,
}: {
  searchParams: { user: string }
}) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

  async function handleSubmit(data: FormData) {
    'use server'

    const result = await validateUserState({
      tokenSigned: data.get('token') as string,
      codeSigned: data.get('codeSigned') as string,
      user: data.get('user') as string,
      code: data.get('code') as string,
    })

    if (result.valid) {
      redirect(
        `/dashboard?tokenSigned=${data.get('token') as string}&codeSigned=${
          data.get('codeSigned') as string
        }&code=${data.get('code') as string}&user=${data.get('user') as string}`
      )
    } else {
      redirect('/login/error/' + result.reason)
    }
  }

  const t = await getI18n()
  const code = randomBytes(8).toString('hex')
  const codeSigned = await new SignJWT({ code })
    .setProtectedHeader({
      alg: 'HS256',
    })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(secret)

  return (
    <>
      <h1 className="text-2xl font-bold mb-3">{t('login.title')}</h1>
      <code className="mb-2 font-semibold">{searchParams.user}</code>
      <p className="mb-5">
        {t('login.tokenHelp', {
          token: <code>~token {code}</code>,
        })}
      </p>
      <form
        className="grid w-full max-w-sm items-center gap-2"
        action={handleSubmit}
      >
        <input type="hidden" name="user" value={searchParams.user} />
        <input type="hidden" name="code" value={code} />
        <input type="hidden" name="codeSigned" value={codeSigned} />

        <Label htmlFor="token">{t('login.token')}</Label>
        <Input
          type="text"
          name="token"
          id="token"
          required
          placeholder="eyJhbGciOiJIUzI1NiIsI..."
        />
        <Button type="submit">{t('login.next')}</Button>
      </form>
    </>
  )
}
