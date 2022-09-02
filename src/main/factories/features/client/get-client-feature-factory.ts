import { CreateResponsibleFeature } from '../../../../data/features/client'
import { makeCreateResponsibleRepository } from '../../repositories'

export const makeGetClientFeature = (): CreateResponsibleFeature => {
  const repository = makeCreateResponsibleRepository()
  return new CreateResponsibleFeature(repository)
}
