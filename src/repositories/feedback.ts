import Feedback from '@/entities/feedback';
import { getDataSource } from '@/utils/typeorm';

export const FeedbackRepository = getDataSource().getRepository(Feedback).extend({
  async createFeedback(feedbackData: Omit<Feedback, 'id' | 'createdAt'>) {
    const feedback = this.create(feedbackData);

    await this.save(feedback);

    return feedback;
  },

  async findAllFeedbacks(): Promise<Feedback[]> {
    const feedbacks = await this.find();

    return feedbacks;
  },
});
