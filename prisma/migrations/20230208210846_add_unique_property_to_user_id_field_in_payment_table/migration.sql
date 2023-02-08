/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `payments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "payments_userId_key" ON "payments"("userId");
