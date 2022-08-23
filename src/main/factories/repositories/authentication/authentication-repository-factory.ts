import { AuthenticationRepository } from '../../../../infra/repositories'

export const makeAuthenticationRepository = (): AuthenticationRepository => {
  return new AuthenticationRepository()
}
