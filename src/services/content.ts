import { IResourceData } from "@/app/api/resources/route";
import { ContentType } from "@/entities/enums";
import { ContentRepository } from "@/repositories/content";
import { PastPaperRepository } from "@/repositories/past-paper";
import { ICreateContent } from "@/types/content";
import { z } from "zod";

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

export async function createContent(data: ICreateContent) {
  if (!data.parentId) {
    return ContentRepository.createChapter(data);
  }

  const parent = await ContentRepository.findOneBy({ id: data.parentId });

  if (!parent || parent.type === ContentType.SUBTOPIC) {
    throw new Error("Topics and Subtopics must be created under chapters and Topics");
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
    chapters: content,
    topics: content
      .map((chapter) => chapter.children)
      .flatMap((topic) => topic)
      .filter((topic) => !!topic),
  };
}
