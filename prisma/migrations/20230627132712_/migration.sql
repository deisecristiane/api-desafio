/*
  Warnings:

  - You are about to drop the `Comic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Comic";

-- CreateTable
CREATE TABLE "comics" (
    "id" SERIAL NOT NULL,
    "codComic" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "rarity" BOOLEAN NOT NULL,
    "quantity" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comics_codComic_key" ON "comics"("codComic");
