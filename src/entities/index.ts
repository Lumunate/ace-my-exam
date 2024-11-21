import BaseEntity from './base-entity';
import Contact from './contact';
import Content from './content';
import Feedback from './feedback';
import PastPaper from './past-paper';
import PastPaperResource from './past-paper-resource';
import Resource from './resource';
import RevisionNote from './revision-note';
import RevisionNoteResource from './revision-note-resource';
import Subject from './subject';
import TopicalQuestion from './topical-question';
import TopicalQuestionResource from './topical-question-resource';
import { User, AccountEntity, SessionEntity, VerificationTokenEntity } from './user';

// Create a consolidated array of all entities
export const Entities = [
  // Auth entities
  User,
  AccountEntity,
  SessionEntity,
  VerificationTokenEntity,
  
  // Base entity
  BaseEntity,
  
  // Core entities
  Resource,
  Contact,
  Feedback,
  Content,
  Subject,
  
  // Past Paper entities
  PastPaper,
  PastPaperResource,
  
  // Topical Question entities
  TopicalQuestion,
  TopicalQuestionResource,
  
  // Revision Note entities
  RevisionNote,
  RevisionNoteResource,
] as const;

// Individual exports
export {
  // Auth
  User,
  AccountEntity,
  SessionEntity,
  VerificationTokenEntity,
  
  // Base
  BaseEntity,
  
  // Core
  Resource,
  Contact,
  Feedback,
  Content,
  Subject,
  
  // Past Paper
  PastPaper,
  PastPaperResource,
  
  // Topical Question
  TopicalQuestion,
  TopicalQuestionResource,
  
  // Revision Note
  RevisionNote,
  RevisionNoteResource,
};