import { CreateEmailUseCase } from '../../../domain/useCases'
import { EmailRepository } from '../../../infra/repositories'

export class CreateEmailFeature implements CreateEmailUseCase {
  constructor(private readonly emailRepository: EmailRepository) {}

  async execute({ email }: CreateEmailUseCase.Input): Promise<CreateEmailUseCase.Output> {
    return await this.emailRepository.create(email)
  }
}
