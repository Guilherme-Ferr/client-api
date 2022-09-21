export interface CreateClientUseCase {
  execute: (input: CreateClientUseCase.Input) => Promise<CreateClientUseCase.Output>
}

export namespace CreateClientUseCase {
  export type Input = {
    user: {
      name: string
      password: string
      privacy_policies: boolean
      id_email: string
      id_client: string
      id_user_type: string
    }
    company: {
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
      visibility_permission: string
    }
    email: {
      id_email_type: string
      email: string
    }
  }
  export type Output = number
}
