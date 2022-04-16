import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookingUncheckedCreateNestedManyWithoutBookingItemInput } from '../booking/booking-unchecked-create-nested-many-without-booking-item.input';

@InputType()
export class BookingItemUncheckedCreateWithoutSeatInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    ShowingId!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => BookingUncheckedCreateNestedManyWithoutBookingItemInput, {nullable:true})
    Booking?: BookingUncheckedCreateNestedManyWithoutBookingItemInput;
}
