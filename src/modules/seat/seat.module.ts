import { Module } from '@nestjs/common';
import { SeatResolver } from './seat.resolver';
import { SeatService } from './seat.service';

@Module({
  providers: [SeatResolver, SeatService],
})
export class SeatModule {}
