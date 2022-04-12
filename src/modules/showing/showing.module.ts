import { Module } from '@nestjs/common';
import { ShowingResolver } from './showing.resolver';
import { ShowingService } from './showing.service';

@Module({
  providers: [ShowingResolver, ShowingService]
})
export class ShowingModule {}
