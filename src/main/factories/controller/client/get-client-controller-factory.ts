import { AuthenticationController } from '../../../../application/controllers'
import { makeAuthenticationFeature, makeCreateTokenFeature } from '../../features'

export const makeGetClientController = (): GetClientController => {
  const getCLientService = makeGetClientFeature()
  return new AuthenticationController(getCLientService)
}
