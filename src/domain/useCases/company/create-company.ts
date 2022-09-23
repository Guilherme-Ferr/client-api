export interface CreateCompanyUseCase {
  execute: (input: CreateCompanyUseCase.Input) => Promise<CreateCompanyUseCase.Output>
}

export namespace CreateCompanyUseCase {
  export type Input = {
    company_name: string
    company_avatar: string
    state_registration: string
    cnpj: string
    owner_cpf: string
    owner_name: string
    register: string
    facebook_link: string
    instagram_link: string
    whatsapp: string
    visibility_permission: boolean
  }
  export type Output = string
}
