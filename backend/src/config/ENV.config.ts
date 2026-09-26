if (!process.env.VERCEL) {
  process.loadEnvFile()
}

export const ENV = {
  MONGO_URI: process.env.MONGO_URI as string,
  PORT: process.env.PORT as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  FRONTEND_URL: process.env.FRONTEND_URL as string,
  SMTP_USER: process.env.SMTP_USER!,
  SMTP_PASS: process.env.SMTP_PASS!,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
  GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI!,
}