/*
  Warnings:

  - You are about to drop the `DeliveryLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "DeliveryLink";

-- CreateTable
CREATE TABLE "DeliveryLinks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DeliveryLinks_pkey" PRIMARY KEY ("id")
);
