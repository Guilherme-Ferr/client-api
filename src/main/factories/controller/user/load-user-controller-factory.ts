import { LoadUserController } from '../../../../application/controllers'
import { makeLoaduserFeature } from '../../features'

export const makeLoadUserController = (): LoadUserController => {
  const loadUserService = makeLoaduserFeature()
  return new LoadUserController(loadUserService)
}
