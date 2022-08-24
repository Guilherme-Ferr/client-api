import { AuthenticationController } from '../../../../application/controllers'
import { makeDBAuthentication, makeDBCreateToken } from '../../features'

export const makeAuthenticationController = (): AuthenticationController => {
  const authenticationService = makeDBAuthentication()
  const createTokenService = makeDBCreateToken()
  return new AuthenticationController(authenticationService, createTokenService)
}
