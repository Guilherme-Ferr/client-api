import { expired, makeReturn, notFound } from '../helpers'
import { HttpRequest } from '../protocols'
import { NextFunction, Response } from 'express'
import { JsonWebTokenError, verify } from 'jsonwebtoken'
import { TOKEN_SECRET } from '../../main/configs/constants'

export function ensureAuthenticated(request: HttpRequest, response: Response, next: NextFunction) {
  try {
    !request.headers.authorization && makeReturn(response, notFound('token'))
    const [, token] = request.headers.authorization.split(' ')
    verify(token, TOKEN_SECRET)
    return next()
  } catch (error) {
    if (error instanceof JsonWebTokenError) return makeReturn(response, expired())
    return makeReturn(response, error.message)
  }
}
