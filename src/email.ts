import nodemailer from "nodemailer";
import {z} from 'zod'
import {config} from "./config";

const emailSchema = z.object({
    from: z.string(),
    to: z.string(),
    cc: z.optional(z.string()),
    subject: z.string(),
    text: z.optional(z.string()),
    html: z.optional(z.string()),
    attachments: z.optional(z.array(z.object({
        filename: z.string(),
        content: z.string(),
        contentType: z.optional(z.string())
    })))
})

export type Message = z.infer<typeof emailSchema>

export const sendMail = async (message: Message): Promise<void> => {
    try {
        const transporter = nodemailer.createTransport(config.smtp.credentials);
        await transporter.sendMail(message);
        console.log(`\nEmail sent successfully.`);
    } catch (e) {
        if(e instanceof z.ZodError){
            console.log('Validation error:', e.errors);
        }
        console.log(`Failed to send email.`);
        console.log(`Error: ${e}`);
    }
}

