import { UserRepository } from '../../../../infra/repositories'

export const makeUserRepository = (): UserRepository => {
  return new UserRepository()
}
