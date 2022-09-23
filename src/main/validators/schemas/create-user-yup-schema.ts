import * as yup from 'yup'
import { booleanRequired, stringRequired } from '../yup-variables'

export const createClientSchema = async (params: any) => {
  const schema = yup.object().shape({
    user: yup.object().shape({
      name: stringRequired('nome do usuario').max(100, 'O campo "name" deve ter no maximo 100 caracteres'),
      password: stringRequired('senha do usuario').max(255, 'Campo password deve ter no maximo 255 caracteres'),
      privacy_policies: booleanRequired(true),
      id_email: stringRequired('id do email do usuario').max(
        255,
        'O campo "id_email" deve ter no maximo 255 caracteres',
      ),
      id_client: stringRequired('id do cliente do usuario').max(
        255,
        'O campo "id_client" deve ter no maximo 255 caracteres',
      ),
      id_user_type: stringRequired('id do tipo do usuario').max(
        255,
        'O campo "id_user_type" deve ter no maximo 255 caracteres',
      ),
    }),
    // company: yup.object().shape({
    //   name: stringRequired('nome do usuario').max(100, 'O campo "nome" deve ter no maximo 100 caracteres'),
    // }),
    email: yup.object().shape({
      email: stringRequired('email do usuario').max(100, 'O campo "email" deve ter no maximo 100 caracteres'),
    }),
  })

  await schema.validate(params, { abortEarly: false })
}
