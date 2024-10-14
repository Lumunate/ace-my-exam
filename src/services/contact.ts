import { ContactRepository } from '@/repositories/contact';
import { IContact } from '@/types/contact';

export async function createContact(data: IContact) {
  const contact = await ContactRepository.createContact(data);

  sendAcknowledgementEmail(data);

  return contact;
}

async function sendAcknowledgementEmail(_contact: IContact) {
  // TODO: Send an email to the user acknowledging the receipt of the message
}
