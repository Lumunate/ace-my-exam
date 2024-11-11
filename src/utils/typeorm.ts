import { DataSource } from 'typeorm';

import Contact from '@/entities/contact';
import Feedback from '@/entities/feedback';
import { AccountEntity, SessionEntity, User, VerificationTokenEntity } from '@/entities/user';
import { Content } from "@/entities/content";
import { PastPaperResource } from "@/entities/past-paper-resource";
import { PastPaper } from "@/entities/past-paper";
import { Resource } from "@/entities/resource";
import { RevisionNoteResource } from "@/entities/revision-note-resource";
import { RevisionNote } from "@/entities/revision-note";
import { TopicalQuestionResource } from "@/entities/topical-resource-resource";
import { TopicalQuestion } from "@/entities/topical-question";

let AppDataSource: DataSource;

if (process.env.NODE_ENV === "production") {
  AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [
      Contact,
      Feedback,
      User,
      SessionEntity,
      VerificationTokenEntity,
      AccountEntity,
      Content,
      PastPaperResource,
      PastPaper,
      Resource,
      RevisionNoteResource,
      RevisionNote,
      TopicalQuestionResource,
      TopicalQuestion,
    ],
    synchronize: false,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [
      Contact,
      Feedback,
      User,
      SessionEntity,
      VerificationTokenEntity,
      AccountEntity,
      Content,
      PastPaperResource,
      PastPaper,
      Resource,
      RevisionNoteResource,
      RevisionNote,
      TopicalQuestionResource,
      TopicalQuestion,
    ],
    synchronize: true,
  });
}

export default AppDataSource;

export async function initializeDataSource() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
}
