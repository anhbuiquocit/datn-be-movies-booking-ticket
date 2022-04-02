import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BookingSumAggregate {

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Int, {nullable:true})
    price?: number;
}
