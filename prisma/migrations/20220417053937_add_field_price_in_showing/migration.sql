/*
  Warnings:

  - Added the required column `price` to the `Showing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Showing` ADD COLUMN `price` INTEGER NOT NULL;
