/*
  Warnings:

  - You are about to drop the `ProductsSectionHeader` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ProductsSectionHeader";

-- CreateTable
CREATE TABLE "ProductsSectionHeaderText" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "weCarry" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductsSectionHeaderText_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsSectionHeaderImages" (
    "id" SERIAL NOT NULL,
    "imageUrls" TEXT[],
    "imageDescriptions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductsSectionHeaderImages_pkey" PRIMARY KEY ("id")
);
