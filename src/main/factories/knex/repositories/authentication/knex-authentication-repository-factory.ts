import { KnexAuthenticationRepository } from 'infra/repositories'

export const makeKnexAuthenticationRepository = (): KnexAuthenticationRepository => {
  return new KnexAuthenticationRepository()
}
