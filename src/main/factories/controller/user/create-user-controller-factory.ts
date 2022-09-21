import { CreateClientController } from '../../../../application/controllers'
import { makeCreateUserFeature } from '../../features'

export const makeCreateClientController = (): CreateClientController => {
  const createCompanyFeature = makeCreateUserFeature()
  const createEmailFeature = makeCreateUserFeature()
  const createUserFeature = makeCreateUserFeature()
  return new CreateClientController(createCompanyFeature, createEmailFeature, createUserFeature)
}
