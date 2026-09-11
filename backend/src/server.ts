import app from "./index.js"
import { ENV } from "./config/ENV.config.js"

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`)
})