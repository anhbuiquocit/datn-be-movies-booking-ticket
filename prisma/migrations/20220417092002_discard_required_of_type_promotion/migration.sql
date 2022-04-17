-- DropForeignKey
ALTER TABLE `Booking` DROP FOREIGN KEY `Booking_PromotionId_fkey`;

-- AlterTable
ALTER TABLE `Booking` MODIFY `PromotionId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_PromotionId_fkey` FOREIGN KEY (`PromotionId`) REFERENCES `Promotion`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
