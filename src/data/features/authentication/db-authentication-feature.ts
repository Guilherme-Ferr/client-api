import { AuthenticationUseCase } from '../../../domain/useCases'
import { AuthenticationRepository } from '../../../infra/repositories'

export class DBAuthenticationFeature implements AuthenticationUseCase {
  constructor(private readonly authentication: AuthenticationRepository) {}

  async authenticate(input: AuthenticationUseCase.Input): Promise<AuthenticationUseCase.Output> {
    const validUserEmail = await this.authentication.authenticate(input)

    if (!validUserEmail || validUserEmail == null) throw new Error('NOT_FOUND_usuario')

    return validUserEmail
  }
}
