import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PromotionMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Float, {nullable:true})
    discount?: number;

    @Field(() => Float, {nullable:true})
    maxDiscount?: number;

    @Field(() => Date, {nullable:true})
    startDate?: Date | string;

    @Field(() => Date, {nullable:true})
    endDate?: Date | string;

    @Field(() => Date, {nullable:true})
    startTime?: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;
}
