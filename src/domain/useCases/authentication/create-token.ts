import { User, Token } from '../../entities'

export interface TokenUseCase {
  create: (input: TokenUseCase.Input) => Promise<TokenUseCase.Output>
}

export namespace TokenUseCase {
  export type Input = User

  export type Output = {
    token: Token
  }
}
