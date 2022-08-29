import { User } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'

export class AuthenticationRepository {
  async authenticate(email: string, password: string): Promise<User> {
    return await knex<User>('tb_client_user')
      .select('id_client_user', 'name')
      .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
      .where({ email })
      .andWhere({ password })
      .first()
  }
}
