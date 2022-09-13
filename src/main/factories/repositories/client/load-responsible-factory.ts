import { LoadResponsibleRepository } from '../../../../infra/repositories/client/load-responsible-repository'

export const makeLoadResponsibleRepository = (): LoadResponsibleRepository => {
  return new LoadResponsibleRepository()
}
