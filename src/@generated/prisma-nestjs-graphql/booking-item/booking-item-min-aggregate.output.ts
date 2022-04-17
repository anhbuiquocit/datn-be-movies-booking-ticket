import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BookingItemMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    SeatId?: string;

    @Field(() => String, {nullable:true})
    ShowingId?: string;

    @Field(() => String, {nullable:true})
    bookingId?: string;
}
