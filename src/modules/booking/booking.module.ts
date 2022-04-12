import { Module } from '@nestjs/common';
import { BookingResolver } from './booking.resolver';
import { BookingService } from './booking.service';

@Module({
  providers: [BookingResolver, BookingService]
})
export class BookingModule {}
