import { makeDBAuthentication } from 'main/factories/features'
import { AuthenticationController } from 'presentation/controllers'

export const makeAuthenticationController = (): AuthenticationController => {
  const authenticationService = makeDBAuthentication()
  return new AuthenticationController(authenticationService)
}
