import { ContentRepository } from "@/repositories/content";

export async function createFullChapterStructure(data: {
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
