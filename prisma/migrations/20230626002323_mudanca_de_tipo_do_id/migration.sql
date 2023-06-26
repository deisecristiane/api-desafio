/*
  Warnings:

  - The primary key for the `comics` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "comics" DROP CONSTRAINT "comics_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "comics_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "comics_id_seq";
