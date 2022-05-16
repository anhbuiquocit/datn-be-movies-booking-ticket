import { PromotionAggregateArgs } from './../../@generated/prisma-nestjs-graphql/promotion/promotion-aggregate.args';
import { PromotionService } from './promotion.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth-guard';
import { Promotion } from 'src/@generated/prisma-nestjs-graphql/promotion/promotion.model';
import { FindManyPromotionArgs } from 'src/@generated/prisma-nestjs-graphql/promotion/find-many-promotion.args';
import { CreateOnePromotionArgs } from 'src/@generated/prisma-nestjs-graphql/promotion/create-one-promotion.args';
import { UpdateOnePromotionArgs } from 'src/@generated/prisma-nestjs-graphql/promotion/update-one-promotion.args';
import { DeleteOnePromotionArgs } from 'src/@generated/prisma-nestjs-graphql/promotion/delete-one-promotion.args';
import { AggregatePromotion } from 'src/@generated/prisma-nestjs-graphql/promotion/aggregate-promotion.output';

@Resolver()
export class PromotionResolver {
  constructor(private promotionService: PromotionService) {}
  @UseGuards(GqlAuthGuard)
  @Query(() => [Promotion])
  async promotionConnection(@Args() args: FindManyPromotionArgs) {
    return this.promotionService.connection(args);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => AggregatePromotion)
  async promotionAggregate(@Args() args: PromotionAggregateArgs) {
    return this.promotionService.promotionAggregate(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Promotion)
  async createPromotion(@Args() args: CreateOnePromotionArgs) {
    return this.promotionService.createOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Promotion)
  async updatePromotion(@Args() args: UpdateOnePromotionArgs) {
    return this.promotionService.updateOne(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Boolean)
  async deletePromotion(@Args() args: DeleteOnePromotionArgs) {
    return this.promotionService.deleteOne(args);
  }
}
