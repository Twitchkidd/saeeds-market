-- CreateTable
CREATE TABLE "HeroImage" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "HeroImage_pkey" PRIMARY KEY ("id")
);
