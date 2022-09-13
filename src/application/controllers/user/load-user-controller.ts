import { ok } from '../../helpers'
import { Controller, HttpResponse } from '../../protocols'
import { LoadUserUseCase } from '../../../domain/useCases'
import { LoadUserDTO as DTO } from '../../dtos'

export class LoadUserController extends Controller<DTO.Request, DTO.Response> {
  constructor(private readonly loadUserFeature: LoadUserUseCase) {
    super()
  }

  async perform({ id }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    const user = await this.loadUserFeature.execute({ id })
    return ok({ user })
  }
}
