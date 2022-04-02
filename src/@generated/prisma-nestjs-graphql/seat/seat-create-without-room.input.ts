import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateNestedManyWithoutSeatInput } from '../booking-item/booking-item-create-nested-many-without-seat.input';

@InputType()
export class SeatCreateWithoutRoomInput {

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

    @Field(() => BookingItemCreateNestedManyWithoutSeatInput, {nullable:true})
    BookingItem?: BookingItemCreateNestedManyWithoutSeatInput;
}
