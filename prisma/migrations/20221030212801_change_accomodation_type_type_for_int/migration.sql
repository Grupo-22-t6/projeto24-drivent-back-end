/*
  Warnings:

  - Changed the type of `accommodationsTypes` on the `Hotel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `accommodationType` on the `Room` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "accommodationsTypes",
ADD COLUMN     "accommodationsTypes" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "accommodationType",
ADD COLUMN     "accommodationType" INTEGER NOT NULL;

-- DropEnum
DROP TYPE "accommodationsTypes";
