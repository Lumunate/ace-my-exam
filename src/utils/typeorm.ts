import { DataSource } from 'typeorm';

import {
  AccountEntity,
  BaseEntity,
  Contact,
  Content,
  PastPaper,
  PastPaperResource,
  Resource,
  RevisionNote,
  RevisionNoteResource,
  SessionEntity,
  Subject,
  TopicalQuestion,
  TopicalQuestionResource,
  User,
  VerificationTokenEntity
} from '@/entities';

let AppDataSource: DataSource;

if (process.env.NODE_ENV === 'production') {
  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
      AccountEntity,
      BaseEntity,
      Contact,
      Content,
      PastPaper,
      PastPaperResource,
      Resource,
      RevisionNote,
      RevisionNoteResource,
      SessionEntity,
      Subject,
      TopicalQuestion,
      TopicalQuestionResource,
      User,
      VerificationTokenEntity
    ],
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
      AccountEntity,
      BaseEntity,
      Contact,
      Content,
      PastPaper,
      PastPaperResource,
      Resource,
      RevisionNote,
      RevisionNoteResource,
      SessionEntity,
      Subject,
      TopicalQuestion,
      TopicalQuestionResource,
      User,
      VerificationTokenEntity
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