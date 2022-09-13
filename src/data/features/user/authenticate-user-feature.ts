import { AuthenticateUserUseCase } from '../../../domain/useCases'
import { UserRepository } from 'infra/repositories'
import sha256 from 'sha256'

export class AuthenticationFeature implements AuthenticateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ email, password }: AuthenticateUserUseCase.Input): Promise<AuthenticateUserUseCase.Output> {
    const user = await this.userRepository.authenticate(email, sha256(password))
    if (!user) throw new Error('NOT_FOUND_usuario')
    return user
  }
}
