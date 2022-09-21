import { ok } from '../../helpers'
import { Controller, HttpResponse } from '../../protocols'
import { CreateCompanyUseCase, CreateEmailUseCase, CreateUserUseCase } from '../../../domain/useCases'
import { CreateClientDTO as DTO } from '../../dtos'
import { createClientSchema } from '../../../main/validators/schemas'

export class CreateClientController extends Controller<DTO.Request, DTO.Response> {
  constructor(
    private readonly createCompanyFeature: CreateCompanyUseCase,
    private readonly createEmailFeature: CreateEmailUseCase,
    private readonly createUserFeature: CreateUserUseCase,
  ) {
    super()
  }

  async perform({ user, company, email }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    await createClientSchema({ user, company, email })
    const companyId = await this.createCompanyFeature.execute({ company })
    const emailId = await this.createEmailFeature.execute({ email })
    const userId = await this.createUserFeature.execute({ user })
    return ok(userId)
  }
}
