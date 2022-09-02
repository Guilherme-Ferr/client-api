import express from 'express'
import cors from 'cors'
import setUpRoutes from './main/configs/routes'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' })
const app = express()
app.use(cors())
app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
setUpRoutes(app)

export { app }
