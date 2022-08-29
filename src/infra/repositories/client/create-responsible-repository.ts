import { Client } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'

export class CreateResponsibleRepository {
  async responsible(cpf: string): Promise<Client> {
    return await knex('tb')
  }
}
