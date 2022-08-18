import { Response } from 'express'
import { HttpResponse } from '../../presentation/protocols'

export function ok(payload = {}, message = 'ok'): HttpResponse {
  return {
    statusCode: 200,
    body: {
      message,
      payload,
    },
  }
}

export function create(payload = {}, message = 'created successfully'): HttpResponse {
  return {
    statusCode: 201,
    body: {
      message,
      payload,
    },
  }
}

export function badRequest(payload = {}): HttpResponse {
  return {
    statusCode: 400,
    body: {
      message: 'bad request',
      payload,
    },
  }
}

export function serverError(message = 'Ocorreu um erro, tente novamente mais tarde!'): HttpResponse {
  return {
    statusCode: 500,
    body: {
      message: 'internal server error',
      errors: [
        {
          message,
        },
      ],
    },
  }
}

export function serverTimeout(message = 'Ocorreu um erro de resposta, tente novamente!'): HttpResponse {
  return {
    statusCode: 504,
    body: {
      message: 'server response error',
      errors: [
        {
          message,
        },
      ],
    },
  }
}

export function notFound(field: string, message = `${field} não encontrado`): HttpResponse {
  return {
    statusCode: 404,
    body: {
      message: 'not found',
      errors: [
        {
          message,
        },
      ],
    },
  }
}

export function makeReturn(res: Response, httpResponse: HttpResponse) {
  return res.status(httpResponse.statusCode).json(httpResponse.body)
}

export function unauthorized(field: string, message = `${field} não autorizado`): HttpResponse {
  return {
    statusCode: 401,
    body: {
      message: 'unauthorized',
      errors: [
        {
          message,
        },
      ],
    },
  }
}

export function expired(message = 'token expirado'): HttpResponse {
  return {
    statusCode: 401,
    body: {
      message: 'jwt expired',
      errors: [
        {
          message,
        },
      ],
    },
  }
}

export function conflict(field: string, message = `${field} já existe`): HttpResponse {
  return {
    statusCode: 409,
    body: {
      message: 'already exists',
      errors: [
        {
          message,
        },
      ],
    },
  }
}

export function unmatched(field: string, message = `${field} não combinam`): HttpResponse {
  return {
    statusCode: 409,
    body: {
      message: 'not match',
      errors: [
        {
          message,
        },
      ],
    },
  }
}

export function forbidden(field: string, message = `${field} não permitido`): HttpResponse {
  return {
    statusCode: 403,
    body: {
      message: 'denied',
      errors: [
        {
          message,
        },
      ],
    },
  }
}
