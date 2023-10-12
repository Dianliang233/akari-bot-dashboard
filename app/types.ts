import { z } from 'zod'

export interface UserState {
  tokenSigned: string
  codeSigned: string
  user: string
  code: string
}

export const userStateSchema = z.object({
  tokenSigned: z.string(),
  codeSigned: z.string(),
  user: z.string(),
  code: z.string(),
})
