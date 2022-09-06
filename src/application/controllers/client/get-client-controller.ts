import { ok } from '../../../main/utils/api-response'
import { Controller, HttpResponse } from '../../protocols'
import { LoadResponsibleUseCase } from '../../../domain/useCases'
import { CreateResponsibleFeature } from '../../../data/features/client'
import { LoadResponsibleDTO as DTO } from '../../dtos/client/get-responsible-dto'
import { createResponsibleSchema } from '../../../main/validators/schemas/create-responsible-yup-schema'

export class GetClientController extends Controller<LoadResponsibleUseCase.Input> {
  constructor(private readonly createResponsibleFeatue: CreateResponsibleFeature) {
    super()
  }

  async perform({ name, email, cpf, password, policyPrivacy }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    const user = { name, email, cpf, password, policyPrivacy }
    return ok(user)
  }
}
