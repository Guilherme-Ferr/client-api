import { sign } from 'jsonwebtoken'
import { CreateTokenUseCase } from '../../../domain/useCases'
import { TOKEN_SECRET } from '../../../main/configs/constants'

export class CreateTokenFeature implements CreateTokenUseCase {
  async execute(user: CreateTokenUseCase.Input): Promise<CreateTokenUseCase.Output> {
    const token = sign({ user }, TOKEN_SECRET, {
      subject: String(user.id_client_user),
      expiresIn: '30h',
    })
    return { token }
  }
}
