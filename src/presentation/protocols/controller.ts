import { HttpResponse } from './http'

export abstract class Controller<T = any, R = any> {
  abstract execute(request: T): Promise<HttpResponse<R>>
}
