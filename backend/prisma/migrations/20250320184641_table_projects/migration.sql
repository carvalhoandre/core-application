/*
  Warnings:

  - You are about to drop the column `enphasys` on the `technologies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "technologies" DROP COLUMN "enphasys",
ADD COLUMN     "emphasis" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "nivel" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "emphasis" BOOLEAN NOT NULL DEFAULT false,
    "repository" TEXT NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);
