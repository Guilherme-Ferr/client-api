import { Client, User } from '../../entities'

export interface CreateResponsibleUseCase {
  execute: (input: CreateResponsibleUseCase.Input) => Promise<CreateResponsibleUseCase.Output>
}

export namespace CreateResponsibleUseCase {
  export type Input = Client
  export type Output = User
}
