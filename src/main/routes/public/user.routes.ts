import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { makeAuthenticationController, makeCreateUserController } from '../../factories/controller'

const router = Router()

export default (route: Router) => {
  route.post('/user/login', adaptRoute(makeAuthenticationController()))
  route.post('/user', adaptRoute(makeCreateUserController()))
}

export { router }
