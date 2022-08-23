import { User } from '../../entities'

export interface AuthenticationUseCase {
  authenticate: (input: AuthenticationUseCase.Input) => Promise<AuthenticationUseCase.Output>
}

export namespace AuthenticationUseCase {
  export type Input = {
    email: string
    password: string
  }
  export type Output = User
}
