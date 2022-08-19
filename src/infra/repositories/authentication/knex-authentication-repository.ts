import { User } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'
import { validatePassword } from '../../../main/utils/authentication'

export class KnexAuthenticationRepository {
  async login(user: User): Promise<User> {
    const id_email = await knex('tb_email').select('tb_email.id_email').where('tb_email.email', user.email)

    if (id_email) {
      const validUser: User = await knex('tb_client_user')
        .select({ email: 'tb_client_user.name', password: 'tb_client_user.password' })
        .where('tb_client_user.id_email', { id_email })
        .first()

      const validaPassword = validUser != null && (await validatePassword(user.password, validUser.password))

      if (validaPassword) return validUser
    } else return null
  }
}
