import { ok } from '../../../main/utils/api-response'
import { Controller, HttpResponse } from '../../protocols'
import { CreateResponsibleUseCase } from '../../../domain/useCases'
import { CreateResponsibleFeature } from '../../../data/features/client'
import { CreateResponsibleDTO as DTO } from '../../dtos/client/create-responsible-dto'
import { createResponsibleSchema } from '../../../main/validators/schemas/create-responsible-yup-schema'

export class SignUpController extends Controller<CreateResponsibleUseCase.Input, CreateResponsibleUseCase.Output> {
  constructor(private readonly createResponsibleFeature: CreateResponsibleFeature) {
    super()
  }

  async perform({ name, email, cpf, password, policyPrivacy }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    await createResponsibleSchema({ name, email, cpf, password, policyPrivacy })
    const user = await this.createResponsibleFeature.execute({ name, email, cpf, password, policyPrivacy })
    return ok(user)
  }
}
