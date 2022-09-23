import { Client } from '../../entities'

export interface LoadUserUseCase {
  execute: (input: LoadUserUseCase.Input) => Promise<LoadUserUseCase.Output>
}

export namespace LoadUserUseCase {
  export type Input = { id: string }
  export type Output = Client
}
