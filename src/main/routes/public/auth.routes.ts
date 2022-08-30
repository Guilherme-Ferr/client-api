import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { makeAuthenticationController } from '../../factories/controller'

const router = Router()

export default (auth: Router) => {
  auth.post('/login', adaptRoute(makeAuthenticationController()))
}

export { router }
