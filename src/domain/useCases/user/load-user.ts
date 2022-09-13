import { user, User } from '../../entities'

export interface LoadUserUseCase {
  execute: (input: LoadUserUseCase.Input) => Promise<LoadUserUseCase.Output>
}

export namespace LoadUserUseCase {
  export type Input = { id: number }
  export type Output = User
}
