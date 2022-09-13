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
