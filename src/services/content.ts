
import { ContentType } from '@prisma/client';

import { IResourceData } from '../app/api/resources/route';
import * as ContentRepository from '../repositories/content';
import * as PastPaperRepository from '../repositories/past-paper';
import * as RevisionNotesRepository from '../repositories/revision-note';
import * as TopicalQuestionsRepository from '../repositories/topical-question';
import { ICreateContent } from '../types/content';

// ================== DEPRECATED =========================
// export async function createFullChapterStructure(data: {
//   subject_id: number;
//   chapterName: string;
//   topics: Array<{
//     name: string;
//     subtopics: Array<{ name: string }>;
//   }>;
// }) {
//   const chapter = await ContentRepository.createChapter({
//     name: data.chapterName,
//   });

//   for (const topicData of data.topics) {
//     const topic = await ContentRepository.createTopic({
//       name: topicData.name,
//       parentId: chapter.id,
//     });

//     for (const subtopicData of topicData.subtopics) {
//       await ContentRepository.createSubtopic({
//         name: subtopicData.name,
//         parentId: topic.id,
//       });
//     }
//   }

//   return ContentRepository.getChapterWithContent(chapter.id);
// }

export async function createContent(data: ICreateContent) {
  if (data.isTopical) {
    if (!data.subjectId) {
      throw new Error('Topical content must have a subject');
    }

    return ContentRepository.createTopic(data, ContentType.TOPICAL_TOPIC);
  }

  if (!data.parentId) {
    return ContentRepository.createChapter(data);
  }

  const parent = await ContentRepository.findOneBy(data.parentId);

  if (!parent || parent.type === ContentType.SUBTOPIC) {
    throw new Error('Topics and Subtopics must be created under chapters and Topics');
  }

  if (parent.type === ContentType.CHAPTER) {
    return ContentRepository.createTopic(data);
  }

  return ContentRepository.createSubtopic(data);
}

export async function getSubjectContentAndPastPapers(subjectId: number): Promise<IResourceData> {
  const content = await ContentRepository.getSubjectWithContent(subjectId);
  const pastPapers = await PastPaperRepository.findPastPapers(subjectId);

  return {
    pastPapers: pastPapers,
    chapters: content.filter((chapter) => chapter.level === ContentType.CHAPTER),
    topics: content
      .filter((topic) => topic.type === ContentType.TOPICAL_TOPIC),
  };
}

export async function getResourceCounts() {
  const pastPapers = await PastPaperRepository.getResourceCount();
  const revisionNotes = await RevisionNotesRepository.getResourceCount();
  const topicalQuestion = await TopicalQuestionsRepository.getResourceCount();

  return {
    pastPapers: pastPapers?._count.resources ?? 0,
    revisionNotes: revisionNotes?._count.resources ?? 0,
    topicalQuestions: topicalQuestion?._count.resources ?? 0,
  };
}
