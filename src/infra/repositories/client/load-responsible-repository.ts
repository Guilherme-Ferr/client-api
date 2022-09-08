import knex from '../../../main/configs/database/knex'

export class LoadResponsibleRepository {
  async findById(id: number) {
    return await knex('tb_client').select(' * ').where('tb_client.id', id).first()
  }
}
