import { Router } from 'express'
// import { ensureToken } from 'main/middlewares'
import { adaptRoute } from '../../adapters'
import { makeAuthenticationController } from '../../factories/controller'

const router = Router()

export default (auth: Router) => {
  auth.post(
    '/login',
    // ensureToken(2),
    adaptRoute(makeAuthenticationController()),
  )
}

export { router }
