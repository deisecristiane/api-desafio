/*
  Warnings:

  - Changed the type of `createdAt` on the `comics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "comics" DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;
