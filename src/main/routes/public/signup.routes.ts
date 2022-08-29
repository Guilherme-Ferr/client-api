import { Router } from 'express'
import { adaptRoute } from '../../adapters'

const router = Router()

export default (signUp: Router) => {
  signUp.post('/client/signUp', adaptRoute(makeSignUpController()))
}

export { router }
