export interface User {
  id_client_user: number
  name: string
  email: string
  password?: string
  created_at?: Date
  updated_at?: Date
}

export interface Client {
  cpf: string
  name: string
  email: string
  password: string
  policyPrivacy: string
}
