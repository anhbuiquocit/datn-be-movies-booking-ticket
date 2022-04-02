import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithoutSeatInput } from './booking-item-update-without-seat.input';
import { BookingItemCreateWithoutSeatInput } from './booking-item-create-without-seat.input';

@InputType()
export class BookingItemUpsertWithWhereUniqueWithoutSeatInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemUpdateWithoutSeatInput, {nullable:false})
    update!: BookingItemUpdateWithoutSeatInput;

    @Field(() => BookingItemCreateWithoutSeatInput, {nullable:false})
    create!: BookingItemCreateWithoutSeatInput;
}
