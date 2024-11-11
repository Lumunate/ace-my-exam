import { DataSource } from 'typeorm';

import Contact from '@/entities/contact';
import { Content } from '@/entities/content';
import Feedback from '@/entities/feedback';
import { PastPaper } from '@/entities/past-paper';
import { PastPaperResource } from '@/entities/past-paper-resource';
import { Resource } from '@/entities/resource';
import { RevisionNote } from '@/entities/revision-note';
import { RevisionNoteResource } from '@/entities/revision-note-resource';
import { TopicalQuestion } from '@/entities/topical-question';
import { TopicalQuestionResource } from '@/entities/topical-resource-resource';
import { AccountEntity, SessionEntity, User, VerificationTokenEntity } from '@/entities/user';

let AppDataSource: DataSource;

if (process.env.NODE_ENV === 'production') {
  AppDataSource = new DataSource({
    type: 'postgres',
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
    type: 'postgres',
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
  console.log('999999999999999999999999999999999999999999999999');
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
}
