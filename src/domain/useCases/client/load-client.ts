import { Client, User } from '../../entities'

export interface LoadResponsibleUseCase {
  execute: (input: LoadResponsibleUseCase.Input) => Promise<LoadResponsibleUseCase.Output>
}

export namespace LoadResponsibleUseCase {
  export type Input = { id: number }
  export type Output = User
}
