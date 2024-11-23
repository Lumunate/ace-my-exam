import FeedbackAcknowledgmentTemplate, { FeedbackAcknowledgmentProps } from "emails/feedback-acknowledgement";
import * as FeedbackRepository from "../repositories/feedback";
import { IFeedback } from "../types/feedback";
import { render } from "@react-email/render";
import { EmailError, sendEmail } from "utils/send-email";

export async function createFeedback(data: IFeedback) {
  const feedback = await FeedbackRepository.createFeedback(data);

  // sendAcknowledgementEmail(data., data);

  return feedback;
}

async function _sendAcknowledgementEmail(email: string, data: FeedbackAcknowledgmentProps): Promise<string> {
  try {
    const html = await render(FeedbackAcknowledgmentTemplate(data));

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
