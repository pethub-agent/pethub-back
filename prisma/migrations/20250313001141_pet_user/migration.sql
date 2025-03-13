-- DropIndex
DROP INDEX "Location_petId_timestamp_idx";

-- CreateTable
CREATE TABLE "UserPet" (
    "userId" TEXT NOT NULL,
    "petId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPet_pkey" PRIMARY KEY ("userId","petId")
);

-- CreateIndex
CREATE INDEX "Location_petId_timestamp_idx" ON "Location"("petId", "timestamp" DESC);

-- AddForeignKey
ALTER TABLE "UserPet" ADD CONSTRAINT "UserPet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPet" ADD CONSTRAINT "UserPet_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
