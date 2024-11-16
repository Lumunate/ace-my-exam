import { IResourceData } from '@/app/api/resources/route';
import { ContentRepository } from '@/repositories/content';
import { PastPaperRepository } from '@/repositories/past-paper';

export async function createFullChapterStructure(data: {
  subject_id: number;

  chapterName: string;
  topics: Array<{
    name: string;
    subtopics: Array<{ name: string }>;
  }>;
}) {
  const chapter = await ContentRepository.createChapter({
    name: data.chapterName,
  });
  for (const topicData of data.topics) {
    const topic = await ContentRepository.createTopic({
      name: topicData.name,
      parentId: chapter.id,
    });

    for (const subtopicData of topicData.subtopics) {
      await ContentRepository.createSubtopic({
        name: subtopicData.name,
        parentId: topic.id,
      });
    }
  }

  return ContentRepository.getChapterWithContent(chapter.id);
}

export async function getSubjectContentAndPastPapers(subjectId: number): Promise<IResourceData> {
  const content = await ContentRepository.getSubjectWithContent(subjectId);
  const pastPapers = await PastPaperRepository.findPastPapers(subjectId);

  return {
    pastPapers: pastPapers,
    chapters: content,
    topics: content
      .map((chapter) => chapter.children)
      .flatMap((topic) => topic)
      .filter((topic) => !!topic),
  };
}
