import { User } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'

export class AuthenticationRepository {
  async authenticate(email: string): Promise<User> {
    return await knex('tb_client_user')
      .select('id_client_user', 'name', 'password')
      .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
      .where('tb_email.email', email)
      .first()
  }
}
