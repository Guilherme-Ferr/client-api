import { Company } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'

export class CompanyRepository {
  async create(company: Company): Promise<string> {
    // const insertObjectData = {
    //   id_email: uuidv4(),
    //   email,
    //   id_email_type,
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // }

    return await knex<Company>('tb_client').insert(company)
  }
}
