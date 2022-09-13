import { AuthenticationFeature } from '../../../../data/features'
import { makeUserRepository } from '../../repositories'

export const makeAuthenticationFeature = (): AuthenticationFeature => {
  const userRepository = makeUserRepository()
  return new AuthenticationFeature(userRepository)
}
