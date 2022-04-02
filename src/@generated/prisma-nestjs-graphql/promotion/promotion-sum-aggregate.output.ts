import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PromotionSumAggregate {

    @Field(() => Float, {nullable:true})
    discount?: number;

    @Field(() => Float, {nullable:true})
    maxDiscount?: number;
}
