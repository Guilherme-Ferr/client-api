import { Router } from 'express'
import { adaptRoute } from '../../adapters/adapt-route'

const router = Router()

export default (auth: Router): void => {
  auth.get('/vapo')
}

export { router }
