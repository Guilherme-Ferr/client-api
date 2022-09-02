import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { makeGetClientController } from '../../factories/controller'

const router = Router()

export default (client: Router) => {
  client.get('/client/:id', adaptRoute(makeGetClientController()))
}

export { router }
