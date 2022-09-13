import { User } from '../../entities'

export interface CreateTokenUseCase {
  execute: (input: CreateTokenUseCase.Input) => Promise<CreateTokenUseCase.Output>
}

export namespace CreateTokenUseCase {
  export type Input = { id_client_user: number; name: string }

  export type Output = { token: string }
}
