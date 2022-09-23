export interface CreateEmailUseCase {
  execute: (input: CreateEmailUseCase.Input) => Promise<CreateEmailUseCase.Output>
}

export namespace CreateEmailUseCase {
  export type Input = {
    email: string
  }
  export type Output = string
}
