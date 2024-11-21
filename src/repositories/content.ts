import { Content } from '@/entities';
import { ContentLevel, ContentType } from '@/entities/enums';
import { ICreateContent } from '@/types/content';
import { getDataSource } from '@/utils/typeorm';

export const ContentRepository = getDataSource().getRepository(Content).extend({
  async createChapter(data: Omit<ICreateContent, 'parentId'>) {
    const chapter = this.create({
      ...data,
      subject_id: data.subjectId,
      type: ContentType.CHAPTER,
      level: ContentLevel.CHAPTER,
    });

    return this.save(chapter);
  },

  async createTopic(data: Omit<ICreateContent, 'subjectId'>) {
    const parent = await this.findOneBy({ id: data.parentId });

    if (!parent || parent.type !== ContentType.CHAPTER) {
      throw new Error('Topics must be created under chapters');
    }

    const topic = this.create({
      ...data,
      parent,
      type: ContentType.TOPIC,
      level: ContentLevel.TOPIC,
    });

    return this.save(topic);
  },

  async createSubtopic(data: Omit<ICreateContent, 'subjectId'>) {
    const parent = await this.findOneBy({ id: data.parentId });

    if (!parent || parent.type !== ContentType.TOPIC) {
      throw new Error('Subtopics must be created under topics');
    }

    const subtopic = this.create({
      ...data,
      parent,
      type: ContentType.SUBTOPIC,
      level: ContentLevel.SUBTOPIC,
    });

    return this.save(subtopic);
  },

  async getChapterWithContent(chapterId: number) {
    return this.createQueryBuilder('chapter')
      .leftJoinAndSelect('chapter.children', 'topics')
      .leftJoinAndSelect('topics.children', 'subtopics')
      .where('chapter.id = :id', { id: chapterId })
      .andWhere('chapter.type = :type', { type: ContentType.CHAPTER })
      .getOne();
  },

  async getSubjectWithContent(subjectId: number) {
    return this.createQueryBuilder('chapter')
      .leftJoinAndSelect('chapter.children', 'topics')
      .leftJoinAndSelect('topics.children', 'subtopics')
      .where('chapter.subject_id = :id', { id: subjectId })
      .getMany();
  },
});
