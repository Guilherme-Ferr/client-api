import { User } from '../../entities'

export interface CreateTokenUseCase {
  execute: (input: CreateTokenUseCase.Input) => Promise<CreateTokenUseCase.Output>
}

export namespace CreateTokenUseCase {
  export type Input = User
  export type Output = { token: string }
}
