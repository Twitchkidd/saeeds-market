/*
  Warnings:

  - You are about to drop the column `weCarry` on the `ProductsSectionHeaderText` table. All the data in the column will be lost.
  - You are about to drop the `InternationalSectionHeader` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagLine` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "ProductsSectionHeaderText" DROP COLUMN "weCarry";

-- DropTable
DROP TABLE "InternationalSectionHeader";

-- DropTable
DROP TABLE "TagLine";

-- CreateTable
CREATE TABLE "TagLineText" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TagLineText_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InternationalSectionHeaderText" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InternationalSectionHeaderText_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WithFromText" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WithFromText_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeCarryText" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WeCarryText_pkey" PRIMARY KEY ("id")
);
