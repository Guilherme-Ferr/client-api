import { LoadResponsibleRepository } from '../../../../infra/repositories/client'
import { makeLoadResponsibleRepository } from '../../repositories/client/load-responsible-factory'

export const makeLoadClientFeature = (): LoadResponsibleRepository => {
  const repository = makeLoadResponsibleRepository()
  return new LoadResponsibleRepository(repository)
}
