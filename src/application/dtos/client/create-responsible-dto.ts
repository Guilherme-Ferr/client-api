import { CreateResponsibleUseCase } from '../../../domain/useCases'

export namespace CreateResponsibleDTO {
  export type Request = CreateResponsibleUseCase.Input

  export type Response = CreateResponsibleUseCase.Output
}
