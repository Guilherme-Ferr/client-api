import { ok } from '../../helpers'
import { Controller, HttpResponse } from '../../protocols'
import { CreateUserUseCase } from '../../../domain/useCases'
import { CreateUserDTO as DTO } from '../../dtos'
import { createUserSchema } from '../../../main/validators/schemas'

export class CreateUserController extends Controller<DTO.Request, DTO.Response> {
  constructor(private readonly createUserFeature: CreateUserUseCase) {
    super()
  }

  async perform({
    name,
    password,
    privacy_policies,
    id_email,
    id_client,
    id_user_type,

    id_email_type,
    email,
    created_at,
    updated_at,
    finish_at,

    company_name, // (obrigatorio)
    company_avatar,
    state_registration,
    cnpj, // (obrigatorio)
    owner_cpf,
    owner_name, // (obrigatorio)
    register,
    facebook_link,
    instagram_link,
    whatsapp,
    visibility_permission,
  }: DTO.Request): Promise<HttpResponse<DTO.Response>> {
    await createUserSchema({ name, password, privacy_policies, id_email, id_client, id_user_type })
    const userId = await this.createUserFeature.execute({
      name,
      password,
      privacy_policies,
      id_email,
      id_client,
      id_user_type,
    })
    return ok(userId)
  }
}
