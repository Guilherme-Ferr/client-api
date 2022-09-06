import { CreateResponsibleUseCase, LoadResponsibleUseCase } from '../../../domain/useCases'
import { LoadResponsibleRepository } from '../../../infra/repositories/client/load-responsible-repository'

export class LoadResponsibleFeature implements LoadResponsibleUseCase {
  constructor(private readonly responsibleRepository: LoadResponsibleRepository) {}

  async execute(input: CreateResponsibleUseCase.Input): Promise<CreateResponsibleUseCase.Output> {
    const validCpf = await this.responsibleRepository.findById()
    if (validCpf != null) throw new Error('CPF_ALREADY_REGISTERED')
    return validCpf
  }
}
