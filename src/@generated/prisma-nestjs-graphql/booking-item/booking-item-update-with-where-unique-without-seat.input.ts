import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithoutSeatInput } from './booking-item-update-without-seat.input';

@InputType()
export class BookingItemUpdateWithWhereUniqueWithoutSeatInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemUpdateWithoutSeatInput, {nullable:false})
    data!: BookingItemUpdateWithoutSeatInput;
}
