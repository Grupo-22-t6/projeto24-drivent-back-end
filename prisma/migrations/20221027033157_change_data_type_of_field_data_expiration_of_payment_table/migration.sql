/*
  Warnings:

  - Changed the type of `expirationDate` on the `Payment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "expirationDate",
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL;
