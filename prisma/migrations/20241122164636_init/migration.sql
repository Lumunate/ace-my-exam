-- CreateEnum
CREATE TYPE "ContentType" AS ENUM ('CHAPTER', 'TOPIC', 'SUBTOPIC');

-- CreateEnum
CREATE TYPE "ContentLevel" AS ENUM ('CHAPTER', 'TOPIC', 'SUBTOPIC');

-- CreateEnum
CREATE TYPE "SubjectResourceType" AS ENUM ('COURSE', 'WORKSHOP', 'TUTORIAL', 'REFERENCE', 'LAB', 'OTHER');

-- CreateEnum
CREATE TYPE "PastPaperResourceType" AS ENUM ('QUESTION_PAPER', 'MARKING_SCHEME', 'SOLUTION_BOOKLET');

-- CreateEnum
CREATE TYPE "RevisionNoteResourceType" AS ENUM ('NOTE', 'ATTACHMENT', 'SUMMARY');

-- CreateEnum
CREATE TYPE "TopicalQuestionResourceType" AS ENUM ('QUESTION_PAPER', 'MARKING_SCHEME');

-- CreateEnum
CREATE TYPE "SubjectDifficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateTable
CREATE TABLE "BaseEntity" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BaseEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" BOOLEAN,
    "image" TEXT,
    "role" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationTokenEntity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationTokenEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountEntity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" BIGINT,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,

    CONSTRAINT "AccountEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SessionEntity" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SessionEntity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "sessionDate" DATE,
    "experience" TEXT NOT NULL,
    "feedback" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subjects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "code" TEXT,
    "metadata" JSONB NOT NULL DEFAULT '{"tags": [], "resourceType": "OTHER", "educationLevel": "", "examBoard": ""}',

    CONSTRAINT "Subjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "name" TEXT NOT NULL,
    "type" "ContentType" NOT NULL,
    "level" "ContentLevel" NOT NULL,
    "description" TEXT,
    "subject_id" INTEGER NOT NULL,

    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resource" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastPaper" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "subject_id" INTEGER,

    CONSTRAINT "PastPaper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PastPaperResource" (
    "id" SERIAL NOT NULL,
    "past_paper_id" INTEGER NOT NULL,
    "resource_id" INTEGER NOT NULL,
    "resource_type" "PastPaperResourceType" NOT NULL,

    CONSTRAINT "PastPaperResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RevisionNote" (
    "id" SERIAL NOT NULL,
    "content_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "RevisionNote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RevisionNoteResource" (
    "id" SERIAL NOT NULL,
    "revision_note_id" INTEGER NOT NULL,
    "resource_id" INTEGER NOT NULL,
    "resource_type" "RevisionNoteResourceType" NOT NULL DEFAULT 'NOTE',

    CONSTRAINT "RevisionNoteResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicalQuestion" (
    "id" SERIAL NOT NULL,
    "content_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "TopicalQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TopicalQuestionResource" (
    "id" SERIAL NOT NULL,
    "topical_question_id" INTEGER NOT NULL,
    "resource_id" INTEGER NOT NULL,
    "resource_type" "TopicalQuestionResourceType" NOT NULL,

    CONSTRAINT "TopicalQuestionResource_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "SessionEntity_sessionToken_key" ON "SessionEntity"("sessionToken");

-- AddForeignKey
ALTER TABLE "VerificationTokenEntity" ADD CONSTRAINT "VerificationTokenEntity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountEntity" ADD CONSTRAINT "AccountEntity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SessionEntity" ADD CONSTRAINT "SessionEntity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Content" ADD CONSTRAINT "Content_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PastPaper" ADD CONSTRAINT "PastPaper_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "Subjects"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PastPaperResource" ADD CONSTRAINT "PastPaperResource_past_paper_id_fkey" FOREIGN KEY ("past_paper_id") REFERENCES "PastPaper"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PastPaperResource" ADD CONSTRAINT "PastPaperResource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RevisionNote" ADD CONSTRAINT "RevisionNote_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RevisionNoteResource" ADD CONSTRAINT "RevisionNoteResource_revision_note_id_fkey" FOREIGN KEY ("revision_note_id") REFERENCES "RevisionNote"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RevisionNoteResource" ADD CONSTRAINT "RevisionNoteResource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicalQuestion" ADD CONSTRAINT "TopicalQuestion_content_id_fkey" FOREIGN KEY ("content_id") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicalQuestionResource" ADD CONSTRAINT "TopicalQuestionResource_topical_question_id_fkey" FOREIGN KEY ("topical_question_id") REFERENCES "TopicalQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TopicalQuestionResource" ADD CONSTRAINT "TopicalQuestionResource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
