import {Message, sendMail} from "./email";
import {config} from "./config";

const message: Message = {
    from: String(config.smtp.from),
    to: String(config.smtp.to),
    subject: "Send from SEANGLAY",
}

sendMail(message)