import { AuthenticationFeature } from '../../../../data/features'
import { makeAuthenticationRepository } from '../../repositories'

export const makeAuthenticationFeature = (): AuthenticationFeature => {
  const repository = makeAuthenticationRepository()
  return new AuthenticationFeature(repository)
}
