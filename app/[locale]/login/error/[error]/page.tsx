import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import { Button } from '@/app/ui/button'
import { getI18n } from '@/app/locale/server'
import { SignJWT, jwtVerify } from 'jose'
import { randomBytes } from 'crypto'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function LoginError({
  params,
}: {
  params: {
    error:
      | 'codeSignInvalid'
      | 'tokenSignInvalid'
      | 'codeMismatchSigned'
      | 'codeMismatchToken'
      | 'userMismatch'
  }
}) {
  const t = await getI18n()

  return (
    <>
      <h1 className="text-2xl font-bold mb-3">{t('login.error.title')}</h1>
      <p className="mb-5">
        {t(`login.error.${params.error}`, { error: params.error })}
      </p>
      <Button asChild>
        <Link href="/login">{t('login.error.retry')}</Link>
      </Button>
    </>
  )
}
