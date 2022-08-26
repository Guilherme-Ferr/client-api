import * as yup from 'yup'
import { ERROR_REQUIRED_SCHEMA } from '../configs/constants'

export const stringRequired = (value: string) => yup.string().trim().required(ERROR_REQUIRED_SCHEMA(value))

export const arrayRequired = (value: []) => yup.array().required(ERROR_REQUIRED_SCHEMA(value))

export const numberRequired = (value: number) => yup.number().required(ERROR_REQUIRED_SCHEMA(value))

export const booleanRequired = (value: boolean) => yup.boolean().required(ERROR_REQUIRED_SCHEMA(value))
