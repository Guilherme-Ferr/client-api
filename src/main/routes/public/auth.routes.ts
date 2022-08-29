import { Router } from 'express'
import { ensureAuthenticated } from 'main/middlewares'
import { adaptRoute } from '../../adapters'
import { makeAuthenticationController } from '../../factories/controller'

const router = Router()

export default (auth: Router) => {
  auth.post('/login', ensureAuthenticated, adaptRoute(makeAuthenticationController()))
}

export { router }
