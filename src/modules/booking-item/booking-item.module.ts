import { Module } from '@nestjs/common';
import { BookingItemResolver } from './booking-item.resolver';
import { BookingItemService } from './booking-item.service';

@Module({
  providers: [BookingItemResolver, BookingItemService]
})
export class BookingItemModule {}
