import { Content } from '@/entities/content';
import { ContentType } from '@/entities/enums';
import { Resource } from '@/entities/resource';
import { RevisionNote } from '@/entities/revision-note';
import { RevisionNoteResource } from '@/entities/revision-note-resource';
import { IRevisionNoteData } from '@/types/revision-note';
import AppDataSource from '@/utils/typeorm';

export const RevisionNoteRepository = AppDataSource.getRepository(RevisionNote).extend({
  async createWithResource(data: IRevisionNoteData) {
    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Verify subtopic
      const content = await queryRunner.manager.findOne(Content, {
        where: { id: data.subtopicId, type: ContentType.SUBTOPIC },
      });

      if (!content) throw new Error('Invalid subtopic ID');

      // Create revision note
      const revisionNote = await queryRunner.manager.save(RevisionNote, {
        title: data.title,
        content,
      });

      // Create resource
      const resource = await queryRunner.manager.save(Resource, {
        url: data.noteUrl,
        type: 'pdf',
      });

      // Create resource relationship
      await queryRunner.manager.save(RevisionNoteResource, {
        revisionNote,
        resource,
      });

      await queryRunner.commitTransaction();

      return this.findOne({
        where: { id: revisionNote.id },
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
