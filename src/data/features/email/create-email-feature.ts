import { CreateEmailUseCase } from '../../../domain/useCases'
import { EmailRepository } from '../../../infra/repositories'

export class CreateEmailFeature implements CreateEmailUseCase {
  constructor(private readonly emailRepository: EmailRepository) {}

  async execute({ email }: CreateEmailUseCase.Input): Promise<CreateEmailUseCase.Output> {
    const newEmailId = await this.emailRepository.create(email)
    if (!newEmailId) throw new Error('SERVER_ERROR')
    return newEmailId
  }
}
