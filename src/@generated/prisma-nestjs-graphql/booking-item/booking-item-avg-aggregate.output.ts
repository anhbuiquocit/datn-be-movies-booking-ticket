import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookingItemAvgAggregate {

    @Field(() => Float, {nullable:true})
    price?: number;
}
