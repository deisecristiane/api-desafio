/*
  Warnings:

  - The `rarity` column on the `comics` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMOM', 'RARE');

-- AlterTable
ALTER TABLE "comics" DROP COLUMN "rarity",
ADD COLUMN     "rarity" "Rarity" NOT NULL DEFAULT 'COMMOM';
