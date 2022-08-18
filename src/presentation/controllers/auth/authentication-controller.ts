import { Authentication, CreateToken } from '../../../domain/useCases'
import { Controller, HttpResponse } from '../../protocols'
import { ok } from '../../../main/utils/apiResponse'

export class AuthenticationController extends Controller<Authentication.Input, Authentication.Output> {
  constructor(private readonly authentication: Authentication, private readonly createToken: CreateToken) {
    super()
  }

  async execute({ email, password }: Authentication.Input): Promise<HttpResponse<Authentication.Output>> {
    try {
      const user = await this.authentication.execute({ email, password })
      const token = await this.createToken.execute(user)
      return ok({ token })
    } catch (error) {}
  }
}
