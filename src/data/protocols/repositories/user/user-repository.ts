export interface AuthenticateUserRepository {
  authenticate: (input: AuthenticateUserRepository.Input) => Promise<AuthenticateUserRepository.Output>
}

export namespace AuthenticateUserRepository {
  export type Input = { email: string; password: string }

  export type Output = { id_client_user: number; name: string }
}
