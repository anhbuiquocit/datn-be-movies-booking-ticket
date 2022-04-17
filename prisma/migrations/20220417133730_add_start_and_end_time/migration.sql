/*
  Warnings:

  - Added the required column `endTime` to the `Promotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Promotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `Showing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Showing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Promotion` ADD COLUMN `endTime` DATETIME(3) DEFAULT NULL,
    ADD COLUMN `startTime` DATETIME(3) DEFAULT NULL;

-- AlterTable
ALTER TABLE `Showing` ADD COLUMN `endTime` DATETIME(3) DEFAULT NULL,
    ADD COLUMN `startTime` DATETIME(3) DEFAULT NULL;
