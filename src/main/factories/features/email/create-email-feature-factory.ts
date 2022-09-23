import { CreateEmailFeature } from '../../../../data/features'
import { makeEmailRepository } from '../../repositories'

export const makeCreateEmailFeature = (): CreateEmailFeature => {
  const emailRepository = makeEmailRepository()
  return new CreateEmailFeature(emailRepository)
}
