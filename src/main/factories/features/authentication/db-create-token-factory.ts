import { makeKnexCreateTokenRepository } from '../../repositories'

export const makeDBCreateToken = (): DBCreateTokenFeature => {
  const repository = makeKnexCreateTokenRepository()
  return new DBCreateTokenFeature(repository)
}
