/*
  Warnings:

  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_roleId_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "name",
ADD COLUMN     "password" TEXT NOT NULL;
