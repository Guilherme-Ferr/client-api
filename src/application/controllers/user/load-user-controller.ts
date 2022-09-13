import { ok } from '../../helpers'
import { Controller, HttpResponse } from '../../protocols'
import { LoadUserUseCase } from '../../../domain/useCases'
import { LoadUserFeature } from '../../../data/features'
import { LoadUserDTO as DTO } from '../../dtos'

export class LoadUserController extends Controller<LoadUserUseCase.Input> {
  constructor(private readonly createUserFeature: LoadUserFeature) {
    super()
  }

  async perform({ id }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    const user = this.createUserFeature.execute({ id })
    return ok(user)
  }
}
