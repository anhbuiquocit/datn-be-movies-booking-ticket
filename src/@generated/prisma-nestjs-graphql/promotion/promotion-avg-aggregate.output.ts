import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PromotionAvgAggregate {

    @Field(() => Float, {nullable:true})
    discount?: number;

    @Field(() => Float, {nullable:true})
    maxDiscount?: number;
}
