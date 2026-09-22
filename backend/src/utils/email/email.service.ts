import { Resend } from "resend";
import { ENV } from "../../config/ENV.config.js";

const resend = new Resend(ENV.RESEND_API_KEY);

export const sendOtp = async (
  email: string,
  otp: string
) => {
  const { data, error } = await resend.emails.send({
    from: "Second Brain <onboarding@resend.dev>",
    to: email,
    subject: "Your Second Brain verification code",
    text: `Your verification code is: ${otp}

This code will expire in 10 minutes.

If you didn't request this code, you can safely ignore this email.`,
  });

  if (error) {
    throw new Error(`Failed to send OTP email: ${error.message}`);
  }

  return data;
};