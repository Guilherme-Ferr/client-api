import { AuthenticationController } from '../../../../application/controllers'
import { makeDBAuthentication } from '../../features'

export const makeAuthenticationController = (): AuthenticationController => {
  const authenticationService = makeDBAuthentication()
  return new AuthenticationController(authenticationService)
}
