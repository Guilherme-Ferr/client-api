import { CreateClientUseCase } from '../../../domain/useCases'

export namespace CreateClientDTO {
  export type Request = CreateClientUseCase.Input

  export type Response = CreateClientUseCase.Output
}
