/*
  Warnings:

  - You are about to drop the column `ShowingId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `BookingItem` table. All the data in the column will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ShowingId` to the `BookingItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_ShowingId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_BookingItemId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_PromotionId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_ShowingId_fkey`;

-- DropForeignKey
ALTER TABLE `Order` DROP FOREIGN KEY `Order_UserId_fkey`;

-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `ShowingId`;

-- AlterTable
ALTER TABLE `BookingItem` DROP COLUMN `amount`,
    ADD COLUMN `ShowingId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Order`;

-- AddForeignKey
ALTER TABLE `BookingItem` ADD CONSTRAINT `BookingItem_ShowingId_fkey` FOREIGN KEY (`ShowingId`) REFERENCES `Showing`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
