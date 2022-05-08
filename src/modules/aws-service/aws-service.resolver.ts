import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { UseGuards } from '@nestjs/common';
import { AwsServiceService } from './aws-service.service';
@Resolver()
export class AwsServiceResolver {
  constructor(private awsService: AwsServiceService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => String)
  async createPresignedS3(@Args('file') file: string) {
    const parseValueToJson = JSON.stringify(
      await this.awsService.createPresigned(file),
    );
    // console.log();
    return parseValueToJson;
  }

  // @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  async imageUrl(@Args('key') key: string) {
    return this.awsService.getUrlOfImage(key);
  }
}
