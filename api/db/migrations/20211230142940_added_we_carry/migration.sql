/*
  Warnings:

  - Added the required column `weCarry` to the `ProductsSectionHeader` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductsSectionHeader" ADD COLUMN     "weCarry" TEXT NOT NULL;
