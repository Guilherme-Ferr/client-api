import { CreateUserUseCase } from '../../../domain/useCases'
import { userRepository } from '../../../infra/repositories'

export class CreateUserFeature implements CreateUserUseCase {
  constructor(private readonly userRepository: userRepository) {}

  async execute({ user }: CreateUserUseCase.Input): Promise<CreateUserUseCase.Output> {
    const newUserId = await this.userRepository.create(user)
    return newUserId
  }
}
