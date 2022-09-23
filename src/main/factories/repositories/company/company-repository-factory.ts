import { CompanyRepository } from '../../../../infra/repositories'

export const makeCompanyRepository = (): CompanyRepository => {
  return new CompanyRepository()
}
