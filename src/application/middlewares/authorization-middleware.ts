import { expired, makeReturn, notFound } from '../helpers/api-response'
import { HttpRequest } from 'application/protocols'
import { NextFunction, Response } from 'express'
import { JsonWebTokenError, verify } from 'jsonwebtoken'
import { TOKEN_SECRET_KEY } from '../../main/configs/constants'

export function ensureAuthenticated(request: HttpRequest, response: Response, next: NextFunction) {
  try {
    !request.headers.authorization && makeReturn(response, notFound('token'))
    const [, token] = request.headers.authorization.split(' ')
    verify(token, TOKEN_SECRET_KEY)
    return next()
  } catch (error) {
    if (error instanceof JsonWebTokenError) return makeReturn(response, expired())
    return makeReturn(response, error.message)
  }
}
