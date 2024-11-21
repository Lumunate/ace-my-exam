import { Content, Resource, TopicalQuestion, TopicalQuestionResource } from '@/entities';
import { ContentType, TopicalQuestionResourceType } from '@/entities/enums';
import { ITopicalQuestionData } from '@/types/topical-qeustion';
import AppDataSource from '@/utils/typeorm';

export const TopicalQuestionRepository = AppDataSource.getRepository(TopicalQuestion).extend({
  async createWithResources(data: ITopicalQuestionData) {
    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Verify subtopic
      const content = await queryRunner.manager.findOne(Content, {
        where: { id: data.subtopicId, type: ContentType.SUBTOPIC },
      });

      if (!content) throw new Error('Invalid subtopic ID');

      // Create topical question
      const topicalQuestion = await queryRunner.manager.save(TopicalQuestion, {
        title: data.title,
        content,
      });

      // Create resources
      const questionPaperResource = await queryRunner.manager.save(Resource, {
        url: data.questionPaper,
        type: 'pdf',
      });

      const markingSchemeResource = await queryRunner.manager.save(Resource, {
        url: data.markingScheme,
        type: 'pdf',
      });

      // Create resource relationships
      await queryRunner.manager.save(TopicalQuestionResource, [
        {
          topicalQuestion,
          resource: questionPaperResource,
          resource_type: TopicalQuestionResourceType.QUESTION_PAPER,
        },
        {
          topicalQuestion,
          resource: markingSchemeResource,
          resource_type: TopicalQuestionResourceType.MARKING_SCHEME,
        },
      ]);

      await queryRunner.commitTransaction();

      return this.findOne({
        where: { id: topicalQuestion.id },
        relations: ['resources', 'resources.resource'],
      });
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  },

  async findBySubtopic(subtopicId: number) {
    return this.find({
      where: { content_id: subtopicId },
      relations: ['resources', 'resources.resource'],
    });
  },
});
