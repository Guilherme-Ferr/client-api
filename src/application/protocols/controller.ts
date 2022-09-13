import { switchError } from '../../main/utils/switch-error'
import { HttpResponse } from './http'

export abstract class Controller<Request = any, Response = any> {
  abstract perform(httpRequest: Request): Promise<HttpResponse<Response>>

  async handle(httpRequest: Request): Promise<HttpResponse> {
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      console.log('🚀🚀🚀🚀 ~ file: controller.ts ~ line 11 ~ Controller<Request ~ handle ~ error', error)
      return switchError(error)
    }
  }
}
