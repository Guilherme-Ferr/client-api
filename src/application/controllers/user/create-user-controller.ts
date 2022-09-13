import { ok } from '../../helpers'
import { Controller, HttpResponse } from '../../protocols'
import { CreateUserUseCase } from '../../../domain/useCases'
import { CreateUserFeature } from '../../../data/features'
import { CreateUserDTO as DTO } from '../../dtos'
import { createUserSchema } from '../../../main/validators/schemas'

export class CreateUserController extends Controller<CreateUserUseCase.Input, CreateUserUseCase.Output> {
  constructor(private readonly createUserFeature: CreateUserFeature) {
    super()
  }

  async perform({ user }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    await createUserSchema(user)
    const userId = await this.createUserFeature.execute({ user })
    return ok(userId)
  }
}
