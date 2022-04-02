import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoomCreateNestedOneWithoutSeatInput } from '../room/room-create-nested-one-without-seat.input';
import { BookingItemCreateNestedManyWithoutSeatInput } from '../booking-item/booking-item-create-nested-many-without-seat.input';

@InputType()
export class SeatCreateInput {

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

    @Field(() => RoomCreateNestedOneWithoutSeatInput, {nullable:false})
    room!: RoomCreateNestedOneWithoutSeatInput;

    @Field(() => BookingItemCreateNestedManyWithoutSeatInput, {nullable:true})
    BookingItem?: BookingItemCreateNestedManyWithoutSeatInput;
}
