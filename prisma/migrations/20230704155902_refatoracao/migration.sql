/*
  Warnings:

  - The `rarity` column on the `comics` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "comics" DROP COLUMN "rarity",
ADD COLUMN     "rarity" TEXT NOT NULL DEFAULT 'COMMOM';
