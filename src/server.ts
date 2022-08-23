import { app } from './app'
import { PORT } from './main/configs/constants'
import './main/configs/module-alias'

app.listen(PORT, () => console.log('Server is running on port:', PORT))
