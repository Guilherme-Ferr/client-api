import { DBAuthenticationFeature } from 'data/features'
import { Controller, HttpResponse } from 'presentation/protocols'
import { AuthenticationUseCase } from 'domain/useCases'
import { AuthenticationDTO as DTO } from 'presentation/dtos'
import { ok } from 'main/utils/apiResponse'

// export class AuthenticationController extends Controller<AuthenticationUseCase.Input, AuthenticationUseCase.Output> {
//   constructor(private readonly authentication: DBAuthenticationFeature) {
//     super()
//   }

//   async execute({ email, password }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
//     try {
//       await this.authentication.login({ email, password })
//       return ok()
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

export class AuthenticationController extends Controller<AuthenticationUseCase.Input, AuthenticationUseCase.Output> {
  constructor(private readonly authentication: DBAuthenticationFeature) {
    super()
  }

  async perform({ email, password }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    const user = await this.authentication.authenticate({ email, password })
    console.log('🚀 ~ file: authentication-controller.ts ~ line 29 ~ AuthenticationController ~ perform ~ user', user)
    return ok({})
  }
}
