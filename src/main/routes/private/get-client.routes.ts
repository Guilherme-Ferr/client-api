import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { makeLoadClientController } from '../../factories/controller'

const router = Router()

export default (client: Router) => {
  client.get('/client/:id', adaptRoute(makeLoadClientController()))
}

export { router }
