import * as yup from 'yup'
import { booleanRequired, stringRequired } from '../yup-variables'

export const createClientSchema = async (params: any) => {
  const schema = yup.object().shape({
    name: stringRequired('nome do usuario').max(100, 'O campo "nome" deve ter no maximo 100 caracteres'),
    password: stringRequired('senha do usuario').max(255, 'Campo senha deve ter no maximo 255 caracteres'),
    privacy_policies: booleanRequired(true),
    id_email: stringRequired('email do usuario'),
    id_client: stringRequired('cliente do usuario'),
    id_user_type: stringRequired('tipo do usuario'),
  })

  await schema.validate(params, { abortEarly: false })
}
