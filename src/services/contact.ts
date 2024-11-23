import { render } from '@react-email/render';

import ContactAcknowledgmentTemplate, { ContactAcknowledgmentProps } from 'emails/contact-acknowledgement';
import NewContactNotificationTemplate, { NewContactNotificationProps } from 'emails/contact-form-submission';
import { EmailError, sendEmail } from 'utils/send-email';

import * as ContactRepository from '../repositories/contact';
import { IContact } from '../types/contact';

export async function createContact(data: IContact) {
  const contact = await ContactRepository.createContact(data);

  sendAcknowledgementEmail(data.email, data);
  sendClientRecieveEmail(contact);

  return contact;
}

async function sendAcknowledgementEmail(email: string, data: ContactAcknowledgmentProps): Promise<string> {
  try {
    const html = await render(ContactAcknowledgmentTemplate(data));

    return await sendEmail(html, {
      to: email,
      subject: 'Thank you for contacting Ace My Exams',
      from: 'fizoneechan@gmail.com',
      fromName: 'Ace My Exams',
      replyTo: 'asma@acemyexam.co.uk',
    });
  } catch (error) {
    if (error instanceof EmailError) {
      throw error;
    }
    throw new EmailError('Failed to prepare verification email', error);
  }
}

async function sendClientRecieveEmail(data: NewContactNotificationProps): Promise<string> {
  try {
    const html = await render(NewContactNotificationTemplate(data));

    return await sendEmail(html, {
      to: 'asma@acemyexam.co.uk',
      subject: 'New Contact Form Submission',
      from: 'fizoneechan@gmail.com',
      fromName: 'Ace My Exams',
      replyTo: 'asma@acemyexam.co.uk',
    });
  } catch (error) {
    if (error instanceof EmailError) {
      throw error;
    }
    throw new EmailError('Failed to prepare client recieve email', error);
  }
}
