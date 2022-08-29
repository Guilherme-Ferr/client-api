import sha256 from 'sha256'
import { AuthenticationUseCase } from '../../../domain/useCases'
import { AuthenticationRepository } from '../../../infra/repositories'

export class AuthenticationFeature implements AuthenticationUseCase {
  constructor(private readonly authenticationRepository: AuthenticationRepository) {}

  async execute({ email, password }: AuthenticationUseCase.Input): Promise<AuthenticationUseCase.Output> {
    const user = await this.authenticationRepository.authenticate(email, sha256(password))
    if (!user) throw new Error('NOT_FOUND_usuario')
    return user
  }
}
