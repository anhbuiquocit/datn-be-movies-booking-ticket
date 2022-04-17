import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    code?: true;

    @Field(() => Boolean, {nullable:true})
    discount?: true;

    @Field(() => Boolean, {nullable:true})
    maxDiscount?: true;

    @Field(() => Boolean, {nullable:true})
    startDate?: true;

    @Field(() => Boolean, {nullable:true})
    endDate?: true;

    @Field(() => Boolean, {nullable:true})
    startTime?: true;

    @Field(() => Boolean, {nullable:true})
    endTime?: true;
}
