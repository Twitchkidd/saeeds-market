-- CreateTable
CREATE TABLE "PrimaryCallToActionText" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PrimaryCallToActionText_pkey" PRIMARY KEY ("id")
);
