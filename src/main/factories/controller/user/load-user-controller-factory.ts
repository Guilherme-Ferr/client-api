import { LoadUserController } from '../../../../application/controllers'
import { makeLoaduserFeature } from '../../features'

export const makeLoadUserController = (): LoadUserController => {
  const loaduserService = makeLoaduserFeature()
  return new LoadUserController(loaduserService)
}
