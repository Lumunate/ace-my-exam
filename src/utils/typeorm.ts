import { DataSource } from 'typeorm';

import { Entities } from '@/entities';

let AppDataSource: DataSource | null = null;

export const getDataSource = () => {
  if (AppDataSource instanceof DataSource) {
    return AppDataSource;
  }

  AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [...Entities],
    synchronize: true,
    ssl:
      process.env.NODE_ENV === 'production'
        ? {
          rejectUnauthorized: false,
        }
        : undefined,
  });

  return AppDataSource;
};

console.log('=====================================');
Entities.forEach((entity) => {
  console.log(`Entity name: ${entity.name}, Entity object:`, entity);
});
console.log('AppDataSource=', AppDataSource);
console.log('=====================================');

export async function initializeDataSource() {
  const dataSource = getDataSource();

  if (!dataSource.isInitialized) {
    await dataSource.initialize().catch((error) => {
      console.error('Error initializing DataSource:', error);
      throw error;
    });
  }

  return dataSource;
}

export default getDataSource();