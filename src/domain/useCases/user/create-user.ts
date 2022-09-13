export interface CreateUserUseCase {
  execute: (input: CreateUserUseCase.Input) => Promise<CreateUserUseCase.Output>
}

export namespace CreateUserUseCase {
  export type Input = {
    name: string
    password: string
    privacy_policies: boolean
    id_email: string
    id_client: string
    id_user_type: string
  }
  export type Output = number
}
