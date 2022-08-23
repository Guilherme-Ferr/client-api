import { DBAuthenticationFeature } from '../../../../data/features'
import { makeAuthenticationRepository } from '../../repositories'

export const makeDBAuthentication = (): DBAuthenticationFeature => {
  const repository = makeAuthenticationRepository()
  return new DBAuthenticationFeature(repository)
}
