/*
  Warnings:

  - You are about to alter the column `sku` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `VarChar(6)`.
  - You are about to alter the column `checkDigit` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `VarChar(1)`.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "sku" SET DATA TYPE VARCHAR(6),
ALTER COLUMN "upc" SET DATA TYPE TEXT,
ALTER COLUMN "checkDigit" SET DATA TYPE VARCHAR(1);
