'use client'

import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai'
import { atomsWithQuery } from 'jotai-tanstack-query'
import { decodeJwt } from 'jose'
import trpc from './trpc'

export const credentialsAtom = atomWithStorage('credentials', {
  loggedIn: false,
  tokenSigned: '',
  codeSigned: '',
  code: '',
  user: '',
})

const senderInfoAtom = trpc
