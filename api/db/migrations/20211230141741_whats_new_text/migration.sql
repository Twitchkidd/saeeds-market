-- CreateTable
CREATE TABLE "WhatsNewText" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WhatsNewText_pkey" PRIMARY KEY ("id")
);
