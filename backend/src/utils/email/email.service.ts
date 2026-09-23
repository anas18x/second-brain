import nodemailer from "nodemailer"
import { ENV } from "../../config/ENV.config.js"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: ENV.SMTP_USER,
    pass: ENV.SMTP_PASS,
  },
})

export const sendOtp = async (
  email: string,
  otp: string,
) => {
  const info = await transporter.sendMail({
    from: `Second Brain <${ENV.SMTP_USER}>`,
    to: email,
    subject: "Your Second Brain verification code",
    text: `Your verification code is: ${otp}

This code will expire in 10 minutes.

If you didn't request this code, you can safely ignore this email.`,
  })

  return info
}