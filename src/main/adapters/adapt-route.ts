import { Request, Response } from 'express'
import { HttpRequest, Controller } from '../../presentation/protocols'

interface Token {
  id: number
  token: string
  created_at?: Date
  updated_at?: Date
  finished_at?: Date
}

interface ApiRequest extends Request {
  token: Token
}

export function adaptRoute(controller: Controller) {
  return async (req: ApiRequest, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      headers: req.headers,
      file: req.file,
      files: req.files as Express.Multer.File[],
    }

    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.headers) {
      res.set(httpResponse.headers)
    }

    return res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
