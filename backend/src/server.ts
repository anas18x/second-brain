import app from "./app.js"
import { connectDB } from "./db.js"
import { ENV } from "./config/ENV.config.js"

await connectDB()

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`)
})