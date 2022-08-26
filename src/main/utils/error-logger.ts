import { appendFile, existsSync, mkdirSync } from 'fs'
import path from 'path'
import { getFullDate } from '.'

function errorLogger(error: Error) {
  const date = getFullDate()

  const pathError = path.resolve(__dirname, '..', '..', '..', 'log', 'error')

  !existsSync(pathError) && mkdirSync(pathError, { recursive: true })

  const fileError = path.resolve(pathError, 'error.log')

  const stringError = `---- Date: ${date} Error: ${error.name}: ${error.message} at ${error.stack}
`

  appendFile(fileError, stringError, (errorLog) => {
    if (errorLog) throw errorLog
  })
}

export default errorLogger
