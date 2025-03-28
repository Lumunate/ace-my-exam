export enum SubjectResourceType {
  COURSE = 'course',
  WORKSHOP = 'workshop',
  TUTORIAL = 'tutorial',
  REFERENCE = 'reference',
  LAB = 'lab',
  OTHER = 'other'
}

export interface SubjectMetadata {
  tags: string[];
  resourceType: SubjectResourceType;
  educationLevel: string;
  examBoard: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  estimatedHours?: number;
  languages?: string[];
  frameworks?: string[];
  customFields?: Record<string, string>;
}
