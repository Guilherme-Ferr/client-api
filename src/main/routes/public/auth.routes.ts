import { Router } from 'express'
import { adaptRoute } from 'main/adapters/adapt-route'
import { makeAuthenticationController } from 'main/factories/controller'

const router = Router()

export default (auth: Router): void => {
  auth.post('/client/login', adaptRoute(makeAuthenticationController()))
}

export { router }
