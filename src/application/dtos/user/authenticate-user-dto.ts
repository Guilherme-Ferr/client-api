import { AuthenticateUserUseCase } from '../../../domain/useCases'

export namespace AuthenticateUserDTO {
  export type Request = AuthenticateUserUseCase.Input

  export type Response = AuthenticateUserUseCase.Output
}
