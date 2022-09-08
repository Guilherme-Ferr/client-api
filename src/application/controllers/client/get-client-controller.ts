import { ok } from '../../../main/utils/api-response'
import { Controller, HttpResponse } from '../../protocols'
import { LoadResponsibleUseCase } from '../../../domain/useCases'
import { LoadResponsibleFeature } from '../../../data/features/client'
import { LoadResponsibleDTO as DTO } from '../../dtos/client/load-responsible-dto'

export class LoadClientController extends Controller<LoadResponsibleUseCase.Input> {
  constructor(private readonly createResponsibleFeature: LoadResponsibleFeature) {
    super()
  }

  async perform({ id }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    const user = this.createResponsibleFeature.execute({ id })
    return ok(user)
  }
}
