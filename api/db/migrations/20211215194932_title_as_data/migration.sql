-- CreateTable
CREATE TABLE "Title" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Title_pkey" PRIMARY KEY ("id")
);
