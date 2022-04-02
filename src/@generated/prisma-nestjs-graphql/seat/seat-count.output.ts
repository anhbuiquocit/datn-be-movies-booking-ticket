import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SeatCount {

    @Field(() => Int, {nullable:false})
    BookingItem?: number;
}
