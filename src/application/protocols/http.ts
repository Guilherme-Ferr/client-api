export interface HttpRequest {
  body?: any
  params?: any
  query?: any
  headers?: any
}

export type HttpResponse<T = any> = {
  statusCode: number
  body?: T
  headers?: any
}
