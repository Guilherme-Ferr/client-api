export interface CreateEmailUseCase {
  execute: (input: CreateEmailUseCase.Input) => Promise<CreateEmailUseCase.Output>
}

export namespace CreateEmailUseCase {
  export type Input = {
    email: {
      id_email_type: string
      email: string
    }
  }
  export type Output = number
}
