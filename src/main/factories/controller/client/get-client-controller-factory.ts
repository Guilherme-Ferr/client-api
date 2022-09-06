import { AuthenticationController, GetClientController } from '../../../../application/controllers'
import { makeAuthenticationFeature, makeCreateTokenFeature } from '../../features'
import { makeGetClientFeature } from '../../features/client/get-client-feature-factory'

export const makeGetClientController = (): GetClientController => {
  const getCLientService = makeGetClientFeature()
  return new GetClientController(getCLientService)
}
