import { Router } from 'express'
import { adaptRoute } from '../../adapters/adapt-route'
import { makeAuthenticationController } from '../../factories/controller'

const router = Router()

export default (auth: Router): void => {
  auth.post('/login', adaptRoute(makeAuthenticationController()))
}

export { router }
