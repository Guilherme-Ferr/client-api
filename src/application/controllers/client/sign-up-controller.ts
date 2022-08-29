import { Controller, HttpResponse } from '../../protocols'
import { CreateResponsibleUseCase } from '../../../domain/useCases'

export class SignUpController extends Controller<CreateResponsibleUseCase.Input, CreateResponsibleUseCase.Output> {
  constructor(private readonly createResponsibleFeature: CreateResponsibleFeature) {
    super()
  }

  async perform({ name, email, cpf, policyPrivacy }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    await signInSchema({ name, email, cpf, policyPrivacy })
  }
}
