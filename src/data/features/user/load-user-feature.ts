import { LoadUserUseCase } from '../../../domain/useCases'
import { LoadUserRepository } from '../../../infra/repositories'

export class LoadUserFeature implements LoadUserUseCase {
  constructor(private readonly userRepository: LoadUserRepository) {}

  async execute(input: LoadUserUseCase.Input): Promise<LoadUserUseCase.Output> {
    const validCpf = await this.userRepository.findById(input.id)
    if (validCpf != null) throw new Error('CPF_ALREADY_REGISTERED')
    return validCpf
  }
}
