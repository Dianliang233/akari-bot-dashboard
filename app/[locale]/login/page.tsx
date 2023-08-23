import { Input } from '@/app/ui/input'
import { Label } from '@/app/ui/label'
import { Button } from '@/app/ui/button'
import { getI18n } from '@/app/locale/server'
import { redirect } from 'next/navigation'

export default async function LoginUsername() {
  async function handleSubmit(data: FormData) {
    'use server'
    redirect('/login/token?user=' + data.get('user'))
  }

  const t = await getI18n()

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">{t('hello')}</h1>
      <p className="mb-5">
        {t('login.userHelp', { cmd: <code>~whoami</code> })}
      </p>
      <form
        className="grid w-full max-w-sm items-center gap-2"
        action={handleSubmit}
      >
        <Label htmlFor="user">{t('login.user')}</Label>
        <Input
          type="text"
          name="user"
          id="user"
          placeholder="Discord|Client|595470552068521984"
        />
        <Button type="submit">{t('login.next')}</Button>
      </form>
    </>
  )
}
