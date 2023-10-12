import { jwtVerify } from 'jose'
import { UserState } from '../../types'

export async function validateUserState({
  tokenSigned,
  codeSigned,
  user,
  code,
}: UserState) {
  console.log({ tokenSigned, codeSigned, user, code })
  const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

  let codeDecrypted, tokenDecrypted
  try {
    codeDecrypted = await jwtVerify(codeSigned, secret)
  } catch {
    return { valid: false, reason: 'codeSignInvalid' }
  }
  try {
    tokenDecrypted = await jwtVerify(tokenSigned, secret)
  } catch {
    return { valid: false, reason: 'tokenSignInvalid' }
  }

  if (codeDecrypted.payload.code !== code) {
    return { valid: false, reason: 'codeMismatchSigned' }
  } else if (tokenDecrypted.payload.code !== code) {
    return { valid: false, reason: 'codeMismatchToken' }
  } else if (tokenDecrypted.payload.senderId !== user) {
    return { valid: false, reason: 'userMismatch' }
  }

  return { valid: true, reason: 'valid' }
}
