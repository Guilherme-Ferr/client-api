import sha256 from 'sha256'
import { CreateUserUseCase } from '../../../domain/useCases'
import { UserRepository } from '../../../infra/repositories'

export class CreateUserFeature implements CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    name,
    password,
    privacy_policies,
    id_email,
    id_client,
    id_user_type,
  }: CreateUserUseCase.Input): Promise<CreateUserUseCase.Output> {
    return await this.userRepository.create({
      name,
      password: sha256(password),
      privacy_policies,
      id_email,
      id_client,
      id_user_type,
    })
  }
}
