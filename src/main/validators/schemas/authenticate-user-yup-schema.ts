import * as yup from 'yup'
import { stringRequired } from '../yup-variables'

export const authenticateUserSchema = async (params: any) => {
  const schema = yup.object().shape({
    email: stringRequired('email de usuario').max(100, 'Campo email deve ter no maximo 100 caracteres'),
    password: stringRequired('senha de usuario').max(255, 'Campo senha deve ter no maximo 255 caracteres'),
  })

  await schema.validate(params, { abortEarly: false })
}
