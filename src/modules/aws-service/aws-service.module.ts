import { Module } from '@nestjs/common';
import { AwsServiceService } from './aws-service.service';
import { AwsServiceResolver } from './aws-service.resolver';

@Module({
  providers: [AwsServiceService, AwsServiceResolver],
})
export class AwsServiceModule {}
