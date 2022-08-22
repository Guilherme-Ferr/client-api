import { User } from "aws-sdk/clients/budgets";
import { Token } from "domain/entities";
import { AuthenticationUseCase } from "domain/useCases";

export class KnexAuthenticationRepository implements AuthenticationUseCase {
  async authenticate: (input: AuthenticationUseCase.Input) => Promise<Token>{
    
  }
 
  // async getUserByEmail(email: string) {
  //   return await knex('tb_client_user')
  //     .select(
  //       'tb_client_user.id_client_user',
  //       'tb_client_user.id_user_type',
  //       'tb_client_user.id_client',
  //       'tb_client_user.id_email',
  //       'tb_client_user.name',
  //       'tb_email.email',
  //     )
  //     .innerJoin('tb_email', 'tb_email.id_email', 'tb_client_user.id_email')
  //     .where('tb_email.email', email)
  //     .first()
  // }
  // async login(user: User): Promise<User> {
  //   const id_email = await knex<User>('tb_email').select('').where('email', user.email)
  //   if (id_email) {
  //     const validUser: User = await knex('tb_client_user')
  //       .select({ email: 'tb_client_user.name', password: 'tb_client_user.password' })
  //       .where('tb_client_user.id_email', id_email)
  //       .first()
  //     const validaPassword = validUser != null && (await validatePassword(user.password, validUser.password))
  //     if (validaPassword) return validUser
  //   } else return null
  // }
}
