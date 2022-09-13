import { User } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'

export class UserRepository {
  async authenticate(email: string, password: string): Promise<{ id_client_user: number; name: string }> {
    return await knex<User>('tb_client_user')
      .select('id_client_user', 'name')
      .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
      .where({ email })
      .andWhere({ password })
      .first()
  }

  async findById(id: number) {
    return await knex('tb_user').select(' * ').where('tb_user.id', id).first()
  }

  async findByCpfAndEmail(cpf: string, email: string): Promise<User> {
    return await knex<User>('tb_client_user')
      .select('id_client_user')
      .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
      .where({ email })
      .andWhere({ cpf })
      .first()
  }

  async create(user: User): Promise<number> {
    return await knex<User>('tb_client_user').insert(user)
  }
}
