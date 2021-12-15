-- CreateTable
CREATE TABLE "TagLine" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TagLine_pkey" PRIMARY KEY ("id")
);
