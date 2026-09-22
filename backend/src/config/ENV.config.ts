if (!process.env.VERCEL) {
  process.loadEnvFile()
}

export const ENV = {
  MONGO_URI: process.env.MONGO_URI as string,
  PORT: process.env.PORT as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  FRONTEND_URL: process.env.FRONTEND_URL as string,
  RESEND_API_KEY: process.env.RESEND_API_KEY as string,
}