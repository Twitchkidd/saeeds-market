-- CreateTable
CREATE TABLE "InternationalSectionHeading" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InternationalSectionHeading_pkey" PRIMARY KEY ("id")
);
