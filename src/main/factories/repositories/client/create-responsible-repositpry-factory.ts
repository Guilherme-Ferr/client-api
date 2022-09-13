import { AuthenticationRepository } from '../../../../infra/repositories'
import { CreateResponsibleRepository } from '../../../../infra/repositories/client/create-responsible-repository'

export const makeCreateResponsibleRepository = (): CreateResponsibleRepository => {
  return new CreateResponsibleRepository()
}
