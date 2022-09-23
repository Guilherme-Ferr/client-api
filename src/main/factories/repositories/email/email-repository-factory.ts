import { EmailRepository } from '../../../../infra/repositories'

export const makeEmailRepository = (): EmailRepository => {
  return new EmailRepository()
}
