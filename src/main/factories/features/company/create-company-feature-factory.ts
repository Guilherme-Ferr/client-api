import { CreateCompanyFeature } from '../../../../data/features'
import { makeCompanyRepository } from '../../repositories'

export const makeCreateCompanyFeature = (): CreateCompanyFeature => {
  const companyRepository = makeCompanyRepository()
  return new CreateCompanyFeature(companyRepository)
}
