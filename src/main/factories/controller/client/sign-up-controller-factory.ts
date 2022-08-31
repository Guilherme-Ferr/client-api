import { SignUpController } from '../../../../application/controllers'
import { makeCreateResponsibleFeature } from '../../features'

export const makeSignUpController = (): SignUpController => {
  const createResponsibleFeature = makeCreateResponsibleFeature()
  return new SignUpController(createResponsibleFeature)
}
