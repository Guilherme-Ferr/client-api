import { Client } from '../../../domain/entities'
import knex from '../../../main/configs/database/knex'

export class CreateResponsibleRepository {
  async responsible(cpf: string) {
    return await knex('tb')
  }
}
