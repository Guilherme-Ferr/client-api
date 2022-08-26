import { badRequest, conflict, forbidden, notFound, serverError } from '../../application/helpers/api-response'
import errorLogger from './error-logger'
import { formatYupError } from './yup-error-formatter'
import { ValidationError } from 'yup'
import { RESPONSE_TYPE_ERROR } from '../configs/constants'

export function switchError(errorMessage: Error) {
  if (errorMessage instanceof ValidationError) return badRequest(formatYupError(errorMessage))
  errorLogger(errorMessage)

  const obj = {
    NOT_FOUND: (text: string) => notFound(text),
    ALREADY_EXISTS: (text: string) => conflict(text),
    NOT_ALLOWED: (text: string) => forbidden(text),
    SERVER_ERROR: (text: string) => serverError(text),
  }

  try {
    const formatedMessage = errorMessage.message.split('_')

    const [state, action] = RESPONSE_TYPE_ERROR[formatedMessage[0] + '_' + formatedMessage[1]].split('_')

    const concatReturnError = state + '_' + action || 'SERVER_ERROR'

    return obj[concatReturnError](formatedMessage[2].toLocaleLowerCase() || 'server error')
  } catch (e) {
    console.log('SERVER CHECK')
  }
}
