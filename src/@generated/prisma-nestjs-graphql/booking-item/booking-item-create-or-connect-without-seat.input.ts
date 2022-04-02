import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemCreateWithoutSeatInput } from './booking-item-create-without-seat.input';

@InputType()
export class BookingItemCreateOrConnectWithoutSeatInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemCreateWithoutSeatInput, {nullable:false})
    create!: BookingItemCreateWithoutSeatInput;
}
