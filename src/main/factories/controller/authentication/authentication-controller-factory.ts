import { AuthenticationController } from '../../../../application/controllers'
import { makeAuthenticationFeature, makeCreateTokenFeature } from '../../features'

export const makeAuthenticationController = (): AuthenticationController => {
  const authenticationFeature = makeAuthenticationFeature()
  const createTokenFeature = makeCreateTokenFeature()
  return new AuthenticationController(authenticationFeature, createTokenFeature)
}
