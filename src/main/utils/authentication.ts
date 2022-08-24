import { compare } from 'bcryptjs'
import sha256 from 'sha256'

export async function validatePassword(requestPassword: string, hashedDBPassword: string): Promise<boolean> {
  const bcryptedPassword = await compare(requestPassword, hashedDBPassword)
  if (!bcryptedPassword) {
    const hashRequest = sha256(requestPassword)
    if (hashRequest == hashedDBPassword) return true
    return false
  } else return true
}
