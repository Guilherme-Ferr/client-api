import { CreateCompanyUseCase } from '../../../domain/useCases'
import { CompanyRepository } from '../../../infra/repositories'

export class CreateCompanyFeature implements CreateCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute({
    company_name,
    company_avatar,
    state_registration,
    cnpj,
    owner_cpf,
    owner_name,
    register,
    facebook_link,
    instagram_link,
    whatsapp,
    visibility_permission,
  }: CreateCompanyUseCase.Input): Promise<CreateCompanyUseCase.Output> {
    const newCompanyId = await this.companyRepository.create({
      company_name,
      company_avatar,
      state_registration,
      cnpj,
      owner_cpf,
      owner_name,
      register,
      facebook_link,
      instagram_link,
      whatsapp,
      visibility_permission,
    })
    return newCompanyId
  }
}
