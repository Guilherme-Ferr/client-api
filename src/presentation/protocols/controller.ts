import { serverError } from 'main/utils/apiResponse'
import { HttpResponse } from './http'

// export abstract class Controller<T = any, R = any> {
//   abstract execute(request: T): Promise<HttpResponse<R>>

// }

export abstract class Controller<T = any, R = any> {
  abstract perform(httpRequest: T): Promise<HttpResponse<R>>

  async handle(httpRequest: any): Promise<HttpResponse> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      return serverError(error)
    }
  }
}
