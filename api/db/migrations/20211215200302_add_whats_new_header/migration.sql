-- CreateTable
CREATE TABLE "WhatsNewHeader" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WhatsNewHeader_pkey" PRIMARY KEY ("id")
);
