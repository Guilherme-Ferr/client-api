export interface User {
  id_client_user?: number
  name: string
  email: string
  policyPrivacy: boolean
  password: string
  id_email: number
  id_user: number
  created_at?: Date
  updated_at?: Date
}

export interface userUserRequest {
  name: string
  id_email: number
  id_user: number
  password: string
  policyPrivacy: boolean
}

export interface user {
  cpf: string
  name: string
  email: string
  password: string
  policyPrivacy: boolean
}
