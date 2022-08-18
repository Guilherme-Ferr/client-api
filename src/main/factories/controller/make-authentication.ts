import { makeDBAuthentication, makeDBCreateToken } from '../../factories/features'
import { AuthenticationController } from '../../../presentation/controllers'

export const makeAuthenticationController = (): AuthenticationController => {
  const authenticationService = makeDBAuthentication()
  const createTokenService = makeDBCreateToken()
  return new AuthenticationController(authenticationService, createTokenService)
}
