/*
  Warnings:

  - You are about to drop the `Title` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Title";

-- CreateTable
CREATE TABLE "Titles" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Titles_pkey" PRIMARY KEY ("id")
);
