import { RequestHandler } from 'express'
import { HttpRequest, Controller } from 'presentation/protocols'

type RouteAdapter = (controller: Controller) => RequestHandler

export const adaptRoute: RouteAdapter = (controller) => async (request, response) => {
  const httpRequest: HttpRequest = await controller.execute({
    ...request.body,
    ...request.headers,
    ...request.params,
    ...request.query,
  })

  const httpResponse = await controller.execute(httpRequest)

  if (httpResponse.headers) {
    response.set(httpResponse.headers)
  }

  return response.status(httpResponse.statusCode).json(httpResponse.body)
}
