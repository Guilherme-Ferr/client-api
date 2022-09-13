import { CreateUserUseCase } from '../../../domain/useCases'

export namespace CreateUserDTO {
  export type Request = CreateUserUseCase.Input

  export type Response = CreateUserUseCase.Output
}
