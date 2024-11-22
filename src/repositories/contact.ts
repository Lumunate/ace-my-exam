import prisma from "@/utils/prisma";
import { Contact } from "@prisma/client";

export async function createContact(contactData: Omit<Contact, "id" | "createdAt">) {
  return prisma.contact.create({
    data: contactData,
  });
}

export async function findByEmail(email: string) {
  return prisma.contact.findFirst({
    where: { email },
  });
}
