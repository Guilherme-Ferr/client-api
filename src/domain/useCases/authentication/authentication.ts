import { User } from '../../entities'

export interface AuthenticationUseCase {
  execute: (input: AuthenticationUseCase.Input) => Promise<AuthenticationUseCase.Output>
}

export namespace AuthenticationUseCase {
  export type Input = {
    email: string
    password: string
  }
  export type Output = User
}
