import { ContentRepository } from '@/repositories/content';

export async function createFullChapterStructure(data: {
  subject_id: number; 
  chapterName: string;
  topics: Array<{
    name: string;
    subtopics: Array<{ name: string }>;
  }>;
}) {
  console.log('abcdefg');
  const chapter = await ContentRepository.createChapter({
    name: data.chapterName,
  });
  
  console.log('abcdefg');
  for (const topicData of data.topics) {
    const topic = await ContentRepository.createTopic({
      name: topicData.name,
      parentId: chapter.id,
    });

    console.log('abcdefg');
    
    for (const subtopicData of topicData.subtopics) {
      await ContentRepository.createSubtopic({
        name: subtopicData.name,
        parentId: topic.id,
      });
    }
    console.log('abcdefg');
  }
  
  console.log('abcdefg');

  return ContentRepository.getChapterWithContent(chapter.id);
}
