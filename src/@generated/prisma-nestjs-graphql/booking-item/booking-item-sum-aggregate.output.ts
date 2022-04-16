import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingItemSumAggregate {

    @Field(() => Int, {nullable:true})
    price?: number;
}
