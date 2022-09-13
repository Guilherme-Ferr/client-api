import { LoadResponsibleFeature } from '../../../../data/features'
import { makeLoadResponsibleRepository } from '../../repositories/client/load-responsible-factory'

export const makeLoadClientFeature = (): LoadResponsibleFeature => {
  const repository = makeLoadResponsibleRepository()
  return new LoadResponsibleFeature(repository)
}
