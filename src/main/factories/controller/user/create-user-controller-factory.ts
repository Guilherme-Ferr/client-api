import { CreateUserController } from '../../../../application/controllers'
import { makeCreateUserFeature } from '../../features'

export const makeCreateUserController = (): CreateUserController => {
  const createUserFeature = makeCreateUserFeature()
  return new CreateUserController(createUserFeature)
}
