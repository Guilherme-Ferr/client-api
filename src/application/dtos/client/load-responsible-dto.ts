import { LoadResponsibleUseCase } from '../../../domain/useCases'

export namespace LoadResponsibleDTO {
  export type Request = LoadResponsibleUseCase.Input

  export type Response = LoadResponsibleUseCase.Output
}
