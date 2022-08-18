import { app } from './app'
import { PORT } from './main/configs/constants'

app.listen(PORT, () => console.log('Server is running on port:', PORT))
