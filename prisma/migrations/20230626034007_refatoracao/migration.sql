/*
  Warnings:

  - The primary key for the `comics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `comics` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "comics" DROP CONSTRAINT "comics_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "comics_pkey" PRIMARY KEY ("id");
