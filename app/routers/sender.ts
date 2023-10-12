import 'server-only'

import { router } from '@/trpc/server'
import { authorizedProcedure } from './util/auth'
import { fetchAPI } from '@/fetchAPI'

export const senderRouter = router({
  senderInfo: authorizedProcedure.query(async (opts) => {
    const { user } = opts.input
    const req = await (await fetchAPI(`/sender/${user}`)).json()
    return req
  }),
})

export interface SenderInfo {
  senderId: string
  isInBlockList: boolean
  isInAllowList: boolean
  isSuperUser: boolean
  warns: number
  disableTyping: boolean
}
