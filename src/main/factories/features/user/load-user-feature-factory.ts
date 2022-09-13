import { LoadUserFeature } from '../../../../data/features'
import { makeUserRepository } from '../../repositories'

export const makeLoaduserFeature = (): LoadUserFeature => {
  const userRepository = makeUserRepository()
  return new LoadUserFeature(userRepository)
}
