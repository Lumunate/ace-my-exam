import { DataSource } from 'typeorm';

import * as entities from '@/entities';

let AppDataSource: DataSource;

if (process.env.NODE_ENV === 'production') {
  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: Object.values(entities),
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: Object.values(entities),
    synchronize: true,
    logging: true,
  });
}

export default AppDataSource;

export async function initializeDataSource() {
  console.log('=====================================');
  Object.keys(entities).forEach((entityName: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.log(entityName, (entities as Record<string, any>)[entityName]);
  });
  console.log('=====================================');

  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
}