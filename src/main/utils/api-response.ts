import { Response } from 'express'
import { HttpResponse } from '../../application/protocols'

export function ok(payload = {}): HttpResponse {
  return {
    statusCode: 200,
    body: {
      statusCode: 200,
      message: 'ok',
      payload,
    },
  }
}

export function create(payload = {}): HttpResponse {
  return {
    statusCode: 201,
    body: {
      statusCode: 201,
      message: 'created successfully',
      payload,
    },
  }
}

export function badRequest(payload = {}): HttpResponse {
  return {
    statusCode: 400,
    body: {
      statusCode: 400,
      message: 'bad request',
      payload,
    },
  }
}

export function serverError(): HttpResponse {
  return {
    statusCode: 500,
    body: {
      statusCode: 500,
      message: 'internal server error',
      errors: [
        {
          message: 'Ocorreu um erro, tente novamente mais tarde!',
        },
      ],
    },
  }
}

export function serverTimeout(): HttpResponse {
  return {
    statusCode: 504,
    body: {
      statusCode: 504,
      message: 'server response error',
      errors: [
        {
          message: 'Ocorreu um erro de resposta, tente novamente!',
        },
      ],
    },
  }
}

export function notFound(field: string): HttpResponse {
  return {
    statusCode: 404,
    body: {
      statusCode: 404,
      message: 'not found',
      errors: [
        {
          message: `${field} não encontrado`,
        },
      ],
    },
  }
}

export function unauthorized(field: string): HttpResponse {
  return {
    statusCode: 401,
    body: {
      statusCode: 401,
      message: 'unauthorized',
      errors: [
        {
          message: `${field} não autorizado`,
        },
      ],
    },
  }
}

export function expired(): HttpResponse {
  return {
    statusCode: 401,
    body: {
      statusCode: 401,
      message: 'jwt expired',
      errors: [
        {
          message: 'token expirado',
        },
      ],
    },
  }
}

export function conflict(field: string): HttpResponse {
  return {
    statusCode: 409,
    body: {
      statusCode: 409,
      message: 'already exists',
      errors: [
        {
          message: `${field} já existe`,
        },
      ],
    },
  }
}

export function forbidden(field: string): HttpResponse {
  return {
    statusCode: 403,
    body: {
      statusCode: 403,
      message: 'denied',
      errors: [
        {
          message: `${field} não permitido`,
        },
      ],
    },
  }
}

export function makeReturn(res: Response, httpResponse: HttpResponse) {
  return res.status(httpResponse.statusCode).json(httpResponse.body)
}
