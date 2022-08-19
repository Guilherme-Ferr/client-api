import { AuthenticationUseCase } from '../../../domain/useCases'
import { KnexAuthenticationRepository } from '../../../infra/repositories'

export class DBAuthenticationFeature implements AuthenticationUseCase {
  constructor(private readonly authentication: KnexAuthenticationRepository) {}

  async login(input: AuthenticationUseCase.Input): Promise<AuthenticationUseCase.Output> {
    const validateUser = await this.authentication.login({
      email: input.email,
      password: input.password,
    })

    if (!validateUser || validateUser == null) throw new Error('NOT_FOUND_usuario')
    else return validateUser
  }
}
