-- CreateTable
CREATE TABLE "comics" (
    "id" SERIAL NOT NULL,
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
