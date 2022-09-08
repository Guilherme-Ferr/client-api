import { LoadClientController } from '../../../../application/controllers'
import { makeLoadClientFeature } from '../../features/client/load-client-feature-factory'

export const makeLoadClientController = (): LoadClientController => {
  const loadClientService = makeLoadClientFeature()
  return new LoadClientController(loadClientService)
}
