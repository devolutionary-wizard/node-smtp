import SMTPTransport from "nodemailer/lib/smtp-transport";
import * as dotenv from "dotenv";

dotenv.config();

export const config = {
    smtp: {
        credentials: {
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        } as SMTPTransport.Options,
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
    }
}