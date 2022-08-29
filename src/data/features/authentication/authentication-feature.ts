import { AuthenticationUseCase } from '../../../domain/useCases'
import { AuthenticationRepository } from '../../../infra/repositories'
import { validatePassword } from '../../../main/utils/authentication'

export class AuthenticationFeature implements AuthenticationUseCase {
  constructor(private readonly authenticationRepository: AuthenticationRepository) {}

  async execute(input: AuthenticationUseCase.Input): Promise<AuthenticationUseCase.Output> {
    const validUserEmail = await this.authenticationRepository.authenticate(input.email)
    if (!validUserEmail || validUserEmail == null) throw new Error('NOT_FOUND_usuario')
    const validUserPassword =
      validUserEmail.password && (await validatePassword(input.password, validUserEmail.password))
    if (!validUserPassword) throw new Error('NOT_FOUND_usuario')
    return validUserEmail
  }
}
