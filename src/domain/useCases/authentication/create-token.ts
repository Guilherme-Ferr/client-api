import { User, Token } from '../../entities'

export interface CreateToken {
  execute: (input: CreateToken.Input) => Promise<CreateToken.Output>
}

export namespace CreateToken {
  export type Input = User

  export type Output = {
    token: Token
  }
}
