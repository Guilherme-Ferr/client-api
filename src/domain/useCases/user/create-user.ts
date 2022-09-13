import { User } from 'domain/entities'
import { Company } from 'domain/entities/company-entities'

export interface CreateUserUseCase {
  execute: (input: CreateUserUseCase.Input) => Promise<CreateUserUseCase.Output>
}

export namespace CreateUserUseCase {
  export type Input = { user: User }
  export type Output = number
}

export interface CreateuserUseCase {
  execute: (input: CreateuserUseCase.Input) => Promise<CreateuserUseCase.Output>
}

export namespace CreateuserUseCase {
  export type Input = { company: Company }
  export type Output = number
}
