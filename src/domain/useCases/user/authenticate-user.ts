export interface AuthenticateUserUseCase {
  execute: (input: AuthenticateUserUseCase.Input) => Promise<AuthenticateUserUseCase.Output>
}

export namespace AuthenticateUserUseCase {
  export type Input = { email: string; password: string }

  export type Output = { id_client_user: string; name: string }
}
