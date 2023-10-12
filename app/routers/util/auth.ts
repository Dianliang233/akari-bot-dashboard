import { publicProcedure } from '@/trpc/server'
import { validateUserState } from './validateUserState'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const authorizedProcedure = publicProcedure
  .input(
    z.object({
      tokenSigned: z.string(),
      codeSigned: z.string(),
      user: z.string(),
      code: z.string(),
    })
  )
  .use(async (opts) => {
    const result = await validateUserState(opts.input)
    if (result.valid) {
      return opts.next()
    } else {
      throw new TRPCError({
        code: 'FORBIDDEN',
        message: result.reason,
      })
    }
  })
