import { LoadUserUseCase } from '../../../domain/useCases'

export namespace LoadUserDTO {
  export type Request = LoadUserUseCase.Input

  export type Response = LoadUserUseCase.Output
}
