/*
  Warnings:

  - You are about to drop the `TagLine` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TagLine";

-- CreateTable
CREATE TABLE "TagLines" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TagLines_pkey" PRIMARY KEY ("id")
);
