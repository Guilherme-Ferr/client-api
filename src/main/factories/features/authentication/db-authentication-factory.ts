import { DBAuthenticationFeature } from 'data/features'
import { makeKnexAuthenticationRepository } from 'main/factories/knex/repositories'

export const makeDBAuthentication = (): DBAuthenticationFeature => {
  const repository = makeKnexAuthenticationRepository()
  return new DBAuthenticationFeature(repository)
}
