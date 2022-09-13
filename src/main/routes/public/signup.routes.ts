import { Router } from 'express'
import { adaptRoute } from '../../adapters'
import { makeSignUpController } from '../../factories/controller'

const router = Router()

export default (signUp: Router) => {
  signUp.post('/client/signUp', adaptRoute(makeSignUpController()))
}

export { router }
