/*
  Warnings:

  - You are about to drop the column `imageDescriptions` on the `ProductsSectionHeaderImage` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrls` on the `ProductsSectionHeaderImage` table. All the data in the column will be lost.
  - Added the required column `description` to the `ProductsSectionHeaderImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `ProductsSectionHeaderImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductsSectionHeaderImage" DROP COLUMN "imageDescriptions",
DROP COLUMN "imageUrls",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
