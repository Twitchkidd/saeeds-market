/*
  Warnings:

  - You are about to drop the `BusinessInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InternationalSectionHeading` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MenuLink` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NewItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagLines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Titles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WhatsNewHeader` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "BusinessInfo";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "InternationalSectionHeading";

-- DropTable
DROP TABLE "MenuLink";

-- DropTable
DROP TABLE "NewItem";

-- DropTable
DROP TABLE "TagLines";

-- DropTable
DROP TABLE "Titles";

-- DropTable
DROP TABLE "UserExample";

-- DropTable
DROP TABLE "WhatsNewHeader";

-- CreateTable
CREATE TABLE "TagLine" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TagLine_pkey" PRIMARY KEY ("id")
);
