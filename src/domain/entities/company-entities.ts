export interface Company {
  id_client?: string
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
  created_at?: Date
  updated_at?: Date
  finish_at?: string
}
