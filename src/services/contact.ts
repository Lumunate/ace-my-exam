import ContactAcknowledgmentTemplate, { ContactAcknowledgmentProps } from "emails/contact-acknowledgement";
import * as ContactRepository from "../repositories/contact";
import { IContact } from "../types/contact";
import { render } from "@react-email/render";
import { EmailError, sendEmail } from "utils/send-email";

export async function createContact(data: IContact) {
  const contact = await ContactRepository.createContact(data);

  sendAcknowledgementEmail(data.email, data);

  return contact;
}

async function sendAcknowledgementEmail(email: string, data: ContactAcknowledgmentProps): Promise<string> {
  try {
    const html = await render(ContactAcknowledgmentTemplate(data));

    return await sendEmail(html, {
      to: email,
      subject: "Thank you for contacting Ace My Exams",
      from: "fizoneechan@gmail.com",
      fromName: "Ace My Exams",
      replyTo: "acemyexams@gmail.com",
    });
  } catch (error) {
    if (error instanceof EmailError) {
      throw error;
    }
    throw new EmailError("Failed to prepare verification email", error);
  }
}
