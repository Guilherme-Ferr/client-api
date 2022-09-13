import { LoadUserUseCase } from '../../../domain/useCases'
import { UserRepository } from '../../../infra/repositories'

export class LoadUserFeature implements LoadUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ id }: LoadUserUseCase.Input): Promise<LoadUserUseCase.Output> {
    const user = await this.userRepository.findById(id)
    if (!user || user === undefined) throw new Error('NOT_FOUND_usuario')
    return user
  }
}
