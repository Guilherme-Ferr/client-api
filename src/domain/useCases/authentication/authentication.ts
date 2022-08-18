import { User } from '../../entities'

export interface Authentication {
  execute: (input: Authentication.Input) => Promise<Authentication.Output>
}

export namespace Authentication {
  export type Input = {
    email: string
    password: string
  }
  export type Output = User
}
