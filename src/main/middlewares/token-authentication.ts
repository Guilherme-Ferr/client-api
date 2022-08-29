import { makeReturn, notFound, unauthorized } from 'application/helpers/api-response'
import { NextFunction } from 'express'

export function ensureAuthenticated() {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      // pegar token da requisição

      // !token && makeReturn(response, notFound('token'));

      const systemUser = await extractSystemUserByToken(token)

      systemUser.permission_id !== permission_id && makeReturn(response, unauthorized('usuário'))

      return next()
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        return makeReturn(response, expired())
      }

      return makeReturn(response, error.message)
    }
  }
}
