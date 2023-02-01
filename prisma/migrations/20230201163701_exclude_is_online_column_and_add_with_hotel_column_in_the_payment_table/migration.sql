/*
  Warnings:

  - You are about to drop the column `isOnline` on the `payments` table. All the data in the column will be lost.
  - Added the required column `withHotel` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "isOnline",
ADD COLUMN     "withHotel" BOOLEAN NOT NULL,
ALTER COLUMN "isPresential" DROP DEFAULT;
