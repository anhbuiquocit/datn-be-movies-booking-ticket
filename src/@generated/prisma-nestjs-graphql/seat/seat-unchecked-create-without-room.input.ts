import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemUncheckedCreateNestedManyWithoutSeatInput } from '../booking-item/booking-item-unchecked-create-nested-many-without-seat.input';

@InputType()
export class SeatUncheckedCreateWithoutRoomInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    position!: string;

    @Field(() => BookingItemUncheckedCreateNestedManyWithoutSeatInput, {nullable:true})
    BookingItem?: BookingItemUncheckedCreateNestedManyWithoutSeatInput;
}
