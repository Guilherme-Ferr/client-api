import { DBAuthenticationFeature } from '../../../data/features'
import { AuthenticationUseCase } from '../../../domain/useCases'
import { Controller, HttpResponse } from '../../protocols'
import { AuthenticationDTO as DTO } from '../../dtos'
import { ok } from '../../../main/utils/api-response'

export class AuthenticationController extends Controller<AuthenticationUseCase.Input, AuthenticationUseCase.Output> {
  constructor(private readonly authenticationFeature: DBAuthenticationFeature) {
    super()
  }

  async perform({ email, password }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    const user = await this.authenticationFeature.authenticate({ email, password })
    return ok(user)
  }
}
