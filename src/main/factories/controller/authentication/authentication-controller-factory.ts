import { AuthenticationController } from '../../../../application/controllers'
import { makeAuthenticationFeature, makeCreateTokenFeature } from '../../features'

export const makeAuthenticationController = (): AuthenticationController => {
  const authenticationService = makeAuthenticationFeature()
  const createTokenService = makeCreateTokenFeature()
  return new AuthenticationController(authenticationService, createTokenService)
}
