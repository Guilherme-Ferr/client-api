import { sign } from 'jsonwebtoken'
import { CreateTokenUseCase } from '../../../domain/useCases'
import { TOKEN_SECRET } from '../../../main/configs/constants'

export class DBCreateTokenFeature implements CreateTokenUseCase {
  async execute(input: CreateTokenUseCase.Input): Promise<CreateTokenUseCase.Output> {
    const token = sign({ input }, TOKEN_SECRET, {
      subject: String(input.id_client_user),
      expiresIn: '30h',
    })
    return { token }
  }
}
