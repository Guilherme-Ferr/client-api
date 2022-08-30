import { Client, User } from '../../../domain/entities'
import { CreateResponsibleUseCase } from '../../../domain/useCases'
import { CreateResponsibleRepository } from '../../../infra/repositories/client/create-responsible-repository'
export class CreateResponsibleFeature implements CreateResponsibleUseCase {
  constructor(private readonly responsibleRepository: CreateResponsibleRepository) {}

  async execute(input: CreateResponsibleUseCase.Input): Promise<CreateResponsibleUseCase.Output> {
    const validCpf = await this.responsibleRepository.responsible(input.cpf)
    if (validCpf != null) throw new Error('CPF_ALREADY_REGISTERED')
    const validEmail = await this.responsibleRepository.responsible(input.email)
    if (validEmail != null) throw new Error('CPF_ALREADY_REGISTERED')
    return validCpf
  }
}
