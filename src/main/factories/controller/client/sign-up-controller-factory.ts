export const makeSignUpController = (): SignUpController => {
  const createResponsibleFeature = makeCreateResponsibleFeature()

  return new SignUpController(createResponsibleFeature)
}
