import { ok } from '../../../main/utils/api-response'
import { Controller, HttpResponse } from '../../protocols'
import { LoadResponsibleUseCase } from '../../../domain/useCases'
import { CreateResponsibleFeature } from '../../../data/features/client'
import { LoadResponsibleDTO as DTO } from '../../dtos/client/load-responsible-dto'

export class ListClientController extends Controller<LoadResponsibleUseCase.Input> {
  constructor(private readonly createResponsibleFeature: CreateResponsibleFeature) {
    super()
  }

  async perform({ id }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    const user = this.createResponsibleFeature.execute()
    return ok(user)
  }
}
