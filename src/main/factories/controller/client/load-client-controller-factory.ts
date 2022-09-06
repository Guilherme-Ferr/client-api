import { ListClientController } from '../../../../application/controllers'
import { makeLoadClientFeature } from '../../features/client/load-client-feature-factory'

export const makeListClientController = (): ListClientController => {
  const listClientService = makeLoadClientFeature()
  return new ListClientController(listClientService)
}
