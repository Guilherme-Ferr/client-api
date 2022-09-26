import { Email } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'
import { v4 as uuidv4 } from 'uuid'
import { ServerError } from '../../../application/helpers'
import errorLogger from '../../../main/utils/error-logger'

export class EmailRepository {
  async create(email: string): Promise<string> {
    const { id_email_type } = await knex('tb_email_type')
      .select({ id_email_type: 'tb_email_type.id_email_type' })
      .where('tb_email_type.name', 'main')
      .first()
      .catch((error) => {
        errorLogger(error)
        throw new ServerError()
      })

    const insertObjectData = {
      id_email: uuidv4(),
      email,
      id_email_type,
      created_at: new Date(),
      updated_at: new Date(),
    }

    const sucessInsert = await knex<Email>('tb_email')
      .insert(insertObjectData)
      .catch((error) => {
        errorLogger(error)
        throw new ServerError()
      })

    return sucessInsert && insertObjectData.id_email
  }
}
