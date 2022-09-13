import { CreateuserController } from '../../../../application/controllers'
import { makeCreateUserFeature } from '../../features'

export const makeCreateuserController = (): CreateuserController => {
  const createUserFeature = makeCreateUserFeature()
  return new CreateuserController(createUserFeature)
}
