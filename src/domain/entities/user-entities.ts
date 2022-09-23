export interface User {
  id_client_user?: string
  name: string
  privacy_policies: boolean
  password: string
  id_email: string
  id_client: string
  id_user_type: string
  created_at?: Date
  updated_at?: Date
}

export interface Client {
  client_user: {
    id_client_user: string
    id_user_type: string
    id_client: string
    id_email: string
    name: string
    password: string
    privacy_policies: boolean
    created_at: string
    updated_at: string
    finish_at: string
  }
  client: {
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
}
