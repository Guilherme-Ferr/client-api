import { AuthenticateUserUseCase, CreateTokenUseCase } from '../../../domain/useCases'
import { Controller, HttpResponse } from '../../protocols'
import { AuthenticateUserDTO as DTO } from '../../dtos'
import { ok } from '../../helpers'
import { authenticateUserSchema } from '../../../main/validators/schemas'

export class AuthenticationController extends Controller<DTO.Request, DTO.Response> {
  constructor(
    private readonly authenticationFeature: AuthenticateUserUseCase,
    private readonly createTokenFeature: CreateTokenUseCase,
  ) {
    super()
  }

  async perform({ email, password }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    await authenticateUserSchema({ email, password })
    const user = await this.authenticationFeature.execute({ email, password })
    const token = await this.createTokenFeature.execute(user)
    return ok(token)
  }
}
