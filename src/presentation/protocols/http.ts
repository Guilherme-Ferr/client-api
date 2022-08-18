export interface HttpRequest {
  body?: any
  params?: any
  query?: any
  headers?: any
  file?: Express.Multer.File
  files?: any
}

export interface HttpResponse {
  statusCode: number
  body?: any
  headers?: any
}
