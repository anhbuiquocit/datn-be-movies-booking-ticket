import { Module } from '@nestjs/common';
import { RoomResolver } from './room.resolver';
import { RoomService } from './room.service';

@Module({
  providers: [RoomResolver, RoomService]
})
export class RoomModule {}
