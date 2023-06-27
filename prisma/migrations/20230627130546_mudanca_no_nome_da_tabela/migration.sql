/*
  Warnings:

  - You are about to drop the `comics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "comics";

-- CreateTable
CREATE TABLE "Comic" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "rarity" BOOLEAN NOT NULL,
    "quantity" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comic_pkey" PRIMARY KEY ("id")
);
