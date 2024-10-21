import { DataSource } from 'typeorm';

import Contact from '@/entities/contact';
import Feedback from '@/entities/feedback';
import { AccountEntity, SessionEntity, User, VerificationTokenEntity } from '@/entities/user';

let AppDataSource: DataSource;

if (process.env.NODE_ENV === 'production') {
  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Contact, Feedback],
    synchronize: false,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [Contact, Feedback, User, SessionEntity, VerificationTokenEntity, AccountEntity],
    synchronize: true,
  });
}

export default AppDataSource;

export async function initializeDataSource() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
}
