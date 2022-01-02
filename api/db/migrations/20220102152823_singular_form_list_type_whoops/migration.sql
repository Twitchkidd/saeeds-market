/*
  Warnings:

  - You are about to drop the `ProductsSectionHeaderImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ProductsSectionHeaderImages";

-- CreateTable
CREATE TABLE "ProductsSectionHeaderImage" (
    "id" SERIAL NOT NULL,
    "imageUrls" TEXT[],
    "imageDescriptions" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductsSectionHeaderImage_pkey" PRIMARY KEY ("id")
);
