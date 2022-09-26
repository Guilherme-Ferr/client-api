import { Company } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'
import { v4 as uuidv4 } from 'uuid'
import { ServerError } from '../../../application/helpers'
import errorLogger from '../../../main/utils/error-logger'

export class CompanyRepository {
  async create(company: Company): Promise<string> {
    const insertObjectData = {
      id_client: uuidv4(),
      ...company,
      created_at: new Date(),
      updated_at: new Date(),
    }

    const sucessInsert = await knex<Company>('tb_client')
      .insert(insertObjectData)
      .catch((error) => {
        errorLogger(error)
        throw new ServerError()
      })

    return sucessInsert && insertObjectData.id_client
  }
}
