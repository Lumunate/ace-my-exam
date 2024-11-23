import sgMail from "./sendgrid";

export type EmailConfig = {
  defaultFrom: string;
  defaultFromName?: string;
  defaultReplyTo?: string;
};

export type SendEmailOptions = {
  to: string;
  subject: string;
  from: string;
  fromName: string;
  replyTo: string;
};

export type VerificationEmailData = {
  userName: string;
  verificationLink: string;
  expiryTime?: string;
};

// Simple error class for email-related errors
export class EmailError extends Error {
  constructor(message: string, public cause?: unknown) {
    super(message);
    this.name = "EmailError";
  }
}

export async function sendEmail(html: string, options: SendEmailOptions): Promise<string> {
  try {
    const msg = {
      to: options.to,
      from: {
        email: options.from,
        name: options.fromName,
      },
      subject: options.subject,
      html,
      replyTo: options.replyTo,
    };

    const [response] = await sgMail.send(msg);
    return response.headers["x-message-id"] || "unknown";
  } catch (error) {
    throw new EmailError("Failed to send email", error);
  }
}
