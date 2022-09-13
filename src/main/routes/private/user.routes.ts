import { ensureAuthenticated } from '../../../application/middlewares'
import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { makeLoadUserController } from '../../factories/controller'

const router = Router()

export default (route: Router) => {
  route.get('/user/:id', ensureAuthenticated, adaptRoute(makeLoadUserController()))
}

export { router }
