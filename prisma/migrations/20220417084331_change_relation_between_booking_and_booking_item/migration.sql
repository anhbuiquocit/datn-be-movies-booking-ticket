/*
  Warnings:

  - You are about to drop the column `price` on the `BookingItem` table. All the data in the column will be lost.
  - Added the required column `bookingId` to the `BookingItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_BookingItemId_fkey`;

-- AlterTable
ALTER TABLE `BookingItem` DROP COLUMN `price`,
    ADD COLUMN `bookingId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `BookingItem` ADD CONSTRAINT `BookingItem_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `Booking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
