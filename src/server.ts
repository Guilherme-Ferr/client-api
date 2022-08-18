import { app } from "./app";
import { PORT } from "./main/config/constants";

app.listen(PORT, () => console.log("Server is running on port:", PORT));
