import Contact from '@/entities/contact';
import { getDataSource } from '@/utils/typeorm';

export const ContactRepository = getDataSource().getRepository(Contact).extend({
  async createContact(contactData: Omit<Contact, 'id' | 'createdAt'>) {
    const contact = this.create(contactData);

    await this.save(contact);

    return contact;
  },

  async findByEmail(email: string) {
    return this.findOne({ where: { email } });
  },
});
