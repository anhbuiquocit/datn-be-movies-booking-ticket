/*
  Warnings:

  - You are about to drop the column `BookingItemId` on the `Booking` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Booking_BookingItemId_fkey` ON `Booking`;

-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `BookingItemId`;
