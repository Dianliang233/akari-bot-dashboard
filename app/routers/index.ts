import { router } from '@/trpc/server'
import { senderRouter } from './sender'
import { validateUserState } from './util/validateUserState'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const appRouter = router({
  sender: senderRouter,
})
export type AppRouter = typeof appRouter
