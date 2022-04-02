import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PromotionCountAggregate } from './promotion-count-aggregate.output';
import { PromotionAvgAggregate } from './promotion-avg-aggregate.output';
import { PromotionSumAggregate } from './promotion-sum-aggregate.output';
import { PromotionMinAggregate } from './promotion-min-aggregate.output';
import { PromotionMaxAggregate } from './promotion-max-aggregate.output';

@ObjectType()
export class PromotionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Float, {nullable:false})
    discount!: number;

    @Field(() => Float, {nullable:false})
    maxDiscount!: number;

    @Field(() => Date, {nullable:false})
    startDate!: Date | string;

    @Field(() => Date, {nullable:false})
    endDate!: Date | string;

    @Field(() => PromotionCountAggregate, {nullable:true})
    _count?: PromotionCountAggregate;

    @Field(() => PromotionAvgAggregate, {nullable:true})
    _avg?: PromotionAvgAggregate;

    @Field(() => PromotionSumAggregate, {nullable:true})
    _sum?: PromotionSumAggregate;

    @Field(() => PromotionMinAggregate, {nullable:true})
    _min?: PromotionMinAggregate;

    @Field(() => PromotionMaxAggregate, {nullable:true})
    _max?: PromotionMaxAggregate;
}
