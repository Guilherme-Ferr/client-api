import { badRequest, forbidden, notFound, serverError, unauthorized } from '../../application/helpers'
import errorLogger from './error-logger'
import { formatYupError } from './yup-error-formatter'
import { ValidationError } from 'yup'

export function switchError(err: Error | ValidationError) {
  errorLogger(err)
  if (err instanceof ValidationError) return badRequest(formatYupError(err))
  else {
    switch (err.name) {
      case 'NOTFOUNDERROR':
        return notFound(err.message)
      case 'SERVERERROR':
        return serverError()
      case 'ALREADYEXISTS':
        return notFound(err.message)
      case 'UNAUTHORIZED':
        return unauthorized(err.message)
      case 'FORBIDEN':
        return forbidden(err.message)
    }
  }
}
