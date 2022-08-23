import { User } from '../../../domain/entities'
import { AuthenticationUseCase } from '../../../domain/useCases'
import knex from '../../../main/configs/database/knex'

export class AuthenticationRepository implements AuthenticationUseCase {
  async authenticate(input: AuthenticationUseCase.Input): Promise<User> {
    return await knex('tb_client_user')
      .select('name', 'email')
      .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
      .where('tb_email.email', input.email)
      .first()
  }
}
