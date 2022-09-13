import { CreateUserFeature } from '../../../../data/features/user'
import { makeUserRepository } from '../../repositories'

export const makeCreateUserFeature = (): CreateUserFeature => {
  const userRepository = makeUserRepository()
  return new CreateUserFeature(userRepository)
}
