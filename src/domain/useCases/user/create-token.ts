export interface CreateTokenUseCase {
  execute: (input: CreateTokenUseCase.Input) => Promise<CreateTokenUseCase.Output>
}

export namespace CreateTokenUseCase {
  export type Input = { id_client_user: string; name: string }

  export type Output = { token: string }
}
