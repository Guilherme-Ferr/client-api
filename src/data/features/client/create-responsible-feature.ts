import { CreateResponsibleUseCase } from '../../../domain/useCases'

export class CreateResponsibleFeature implements CreateResponsibleUseCase {
  constructor(private readonly responsibleRepository: ResponsibleRepository) {}
}
