import { Client, User } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'

export class UserRepository {
  async authenticate(email: string, password: string): Promise<{ id_client_user: string; name: string }> {
    return await knex<User>('tb_client_user')
      .select('id_client_user', 'name')
      .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
      .where({ email })
      .andWhere({ password })
      .first()
  }

  async findById(id: string): Promise<Client> {
    const user = await knex<User>('tb_client_user as c')
      .select(
        'c.id_client_user',
        'c.name',
        'c.privacy_policies',
        'c.id_email',
        'c.id_client_user',
        'c.id_client',
        'c.id_user_type',
        'c.created_at',
        'c.updated_at',
      )
      .where('c.id_client_user', id)
      .first()

    const client = await knex<User>('tb_client')
      .select('tb_client.*')
      .innerJoin('tb_client_user', 'tb_client_user.id_client', 'tb_client.id_client')
      .where('tb_client_user.id_client_user', id)
      .first()

    return { client_user: user, client }
  }

  async findByCpfAndEmail(cpf: string, email: string): Promise<User> {
    return await knex<User>('tb_client_user')
      .select('id_client_user')
      .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
      .where({ email })
      .andWhere({ cpf })
      .first()
  }

  async create(user: User): Promise<string> {
    return await knex<User>('tb_client_user').insert(user)
  }
}
