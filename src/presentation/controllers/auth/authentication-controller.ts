import { AuthenticationUseCase, TokenUseCase } from '../../../domain/useCases'
import { Controller, HttpResponse, HttpRequest } from '../../protocols'
import { ok } from '../../../main/utils/apiResponse'

export class AuthenticationController extends Controller<AuthenticationUseCase.Input, AuthenticationUseCase.Output> {
  constructor(
    private readonly authentication: AuthenticationUseCase, // private readonly token: TokenUseCase
  ) {
    super()
  }

  async execute({ email, password }: AuthenticationUseCase.Input): Promise<HttpResponse<AuthenticationUseCase.Output>> {
    console.log('🚀 ~ file: authentication-controller.ts ~ line 12 ~ AuthenticationController ~ execute ~ email', email)
    try {
      const user = await this.authentication.login({ email, password })
      // const token = await this.token.create(user)
      return ok()
    } catch (error) {
      console.log('vapo do bom')
    }
  }
}
