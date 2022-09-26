import { CreateClientController } from '../../../../application/controllers'
import { makeCreateUserFeature, makeCreateEmailFeature, makeCreateCompanyFeature } from '../../features'

export const makeCreateClientController = (): CreateClientController => {
  const createCompanyFeature = makeCreateCompanyFeature()
  const createEmailFeature = makeCreateEmailFeature()
  const createUserFeature = makeCreateUserFeature()
  return new CreateClientController(createCompanyFeature, createEmailFeature, createUserFeature)
}
