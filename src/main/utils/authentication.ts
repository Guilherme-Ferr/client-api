import { compare } from 'bcryptjs'
import sha256 from 'sha256'

export async function validatePassword(requestPassword: string, hashedDBPassword: string): Promise<boolean> {
  const hashedRequest = sha256(requestPassword)
  if (hashedRequest === hashedDBPassword) return true
  const bcryptedPassword = await compare(requestPassword, hashedDBPassword)
  return !!bcryptedPassword
}
