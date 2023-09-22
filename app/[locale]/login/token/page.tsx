import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import { Button } from '@/app/ui/button'
import { getI18n } from '@/app/locale/server'
import { SignJWT, jwtVerify } from 'jose'
import { randomBytes } from 'crypto'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function LoginToken({
  searchParams,
}: {
  searchParams: { user: string }
}) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

  async function handleSubmit(data: FormData) {
    'use server'

    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

    let codeDecrypted, tokenDecrypted
    try {
      codeDecrypted = await jwtVerify(data.get('codeSigned') as string, secret)
    } catch {
      redirect('/login/error/codeSignInvalid')
    }
    try {
      tokenDecrypted = await jwtVerify(data.get('token') as string, secret)
    } catch {
      redirect('/login/error/tokenSignInvalid')
    }

    if (codeDecrypted.payload.code !== data.get('code')) {
      redirect('/login/error/codeMismatchSigned')
    } else if (tokenDecrypted.payload.code !== data.get('code')) {
      redirect('/login/error/codeMismatchToken')
    } else if (tokenDecrypted.payload.senderId !== data.get('user')) {
      redirect('/login/error/userMismatch')
    }

    redirect(
      `/dashboard?token=${data.get('token') as string}&code=${
        data.get('codeSigned') as string
      }`
    )
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
