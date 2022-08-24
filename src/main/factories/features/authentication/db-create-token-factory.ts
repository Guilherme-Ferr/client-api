import { DBCreateTokenFeature } from '../../../../data/features'

export const makeDBCreateToken = (): DBCreateTokenFeature => {
  return new DBCreateTokenFeature()
}
