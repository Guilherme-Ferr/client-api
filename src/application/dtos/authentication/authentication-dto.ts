import { AuthenticationUseCase } from '../../../domain/useCases'

export namespace AuthenticationDTO {
  export type Request = AuthenticationUseCase.Input

  export type Response = AuthenticationUseCase.Output
}
