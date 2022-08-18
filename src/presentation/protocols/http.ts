export interface HttpRequest {
  body?: any
  params?: any
  query?: any
  headers?: any
  file?: Express.Multer.File
  files?: any
}

export type HttpResponse<T = any> = {
  statusCode: number
  body?: T
  headers?: any
}
