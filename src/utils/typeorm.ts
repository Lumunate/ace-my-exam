import path from 'path';

import { DataSource } from 'typeorm';

import * as entities from '@/entities';

console.log('testing=', Object.values(entities));

let AppDataSource: DataSource;

if (process.env.NODE_ENV === 'production') {
  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
      path.join(__dirname, 'entities', '*.js'),
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
    entities: Object.values(entities),
    synchronize: true,
  });
}

export default AppDataSource;

export async function initializeDataSource() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
}
