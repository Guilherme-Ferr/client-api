import { Client, User } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'
import { v4 as uuidv4 } from 'uuid'
import { ServerError } from '../../../application/helpers'
import errorLogger from '../../../main/utils/error-logger'

export class UserRepository {
  async authenticate(email: string, password: string): Promise<{ id_client_user: string; name: string }> {
    return await knex<User>('tb_client_user')
      .select('id_client_user', 'name')
      .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
      .where({ email })
      .andWhere({ password })
      .first()
      .catch((error) => {
        errorLogger(error)
        throw new ServerError()
      })
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
      .catch((error) => {
        errorLogger(error)
        throw new ServerError()
      })

    const client = await knex<User>('tb_client')
      .select('tb_client.*')
      .innerJoin('tb_client_user', 'tb_client_user.id_client', 'tb_client.id_client')
      .where('tb_client_user.id_client_user', id)
      .first()
      .catch((error) => {
        errorLogger(error)
        throw new ServerError()
      })

    return { client_user: user, client }
  }

  async findByCpfAndEmail(cpf: string, email: string): Promise<User> {
    return await knex<User>('tb_client_user')
      .select('id_client_user')
      .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
      .where({ email })
      .andWhere({ cpf })
      .first()
      .catch((error) => {
        errorLogger(error)
        throw new ServerError()
      })
  }

  async create(user: User): Promise<string> {
    const insertObjectData = {
      id_client_user: uuidv4(),
      ...user,
      created_at: new Date(),
      updated_at: new Date(),
    }

    const sucessInsert = await knex<User>('tb_client_user')
      .insert(insertObjectData)
      .catch((error) => {
        errorLogger(error)
        throw new ServerError()
      })

    return sucessInsert && insertObjectData.id_client_user
  }
}
