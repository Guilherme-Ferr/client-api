import { AuthenticationFeature, CreateTokenFeature } from '../../../data/features'
import { AuthenticationUseCase } from '../../../domain/useCases'
import { Controller, HttpResponse } from '../../protocols'
import { AuthenticationDTO as DTO } from '../../dtos'
import { ok } from '../../../main/utils/api-response'
import { authenticationSchema } from '../../../main/validators/schemas'

export class AuthenticationController extends Controller<AuthenticationUseCase.Input, AuthenticationUseCase.Output> {
  constructor(
    private readonly authenticationFeature: AuthenticationFeature,
    private readonly createTokenFeature: CreateTokenFeature,
  ) {
    super()
  }

  async perform({ email, password }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    await authenticationSchema({ email, password })
    const user = await this.authenticationFeature.execute({ email, password })
    const token = await this.createTokenFeature.execute(user)
    return ok(token)
  }
}
