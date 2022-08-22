import { User } from 'domain/entities'
import { AuthenticationUseCase } from 'domain/useCases'
import { KnexAuthenticationRepository } from 'infra/repositories'

export class DBAuthenticationFeature implements AuthenticationUseCase {
  constructor(private readonly authentication: KnexAuthenticationRepository) {}

  async authenticate(input: AuthenticationUseCase.Input): Promise<AuthenticationUseCase.Output> {
    const validateUser = await this.authentication.getUserByEmail(input.email)

    if (!validateUser || validateUser == null) throw new Error('NOT_FOUND_usuario')

    const successLogin: User =
      validateUser && (await this.authentication.login({ email: input.email, password: input.password } as User))
    console.log(
      '🚀 ~ file: db-authentication-feature.ts ~ line 14 ~ DBAuthenticationFeature ~ login ~ successLogin',
      successLogin,
    )

    return successLogin
  }
}
