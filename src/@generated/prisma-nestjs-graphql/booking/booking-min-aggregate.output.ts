import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    UserId?: string;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => String, {nullable:true})
    PromotionId?: string;

    @Field(() => Boolean, {nullable:true})
    isPayment?: boolean;
}
