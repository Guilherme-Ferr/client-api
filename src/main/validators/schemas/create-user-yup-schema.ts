import * as yup from 'yup'
import { booleanRequired, stringRequired } from '../yup-variables'

export const createUserSchema = async (params: any) => {
  const schema = yup.object().shape({
    name: stringRequired('nome do usuario').max(100, 'O campo "nome" deve ter no maximo 100 caracteres'),
    email: stringRequired('email do usuario').max(100, 'Campo email deve ter no maximo 100 caracteres'),
    cpf: stringRequired('cpf do usuario').max(15, 'Campo cpf deve ter no maximo 15 caracteres'),
    policyPrivacy: booleanRequired(true),
  })

  await schema.validate(params, { abortEarly: false })
}
