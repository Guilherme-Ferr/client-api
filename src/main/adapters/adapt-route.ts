import { RequestHandler } from 'express'
import { Controller } from '../../application/protocols'

export const adaptRoute = (controller: Controller): RequestHandler => {
  return async (req, res) => {
    const { statusCode, body } = await controller.handle({ ...req.body, ...req.params })
    res.status(statusCode).json(body)
  }
}
