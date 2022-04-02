import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutBookingItemInput } from './booking-create-without-booking-item.input';
import { BookingCreateOrConnectWithoutBookingItemInput } from './booking-create-or-connect-without-booking-item.input';
import { BookingCreateManyBookingItemInputEnvelope } from './booking-create-many-booking-item-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingUncheckedCreateNestedManyWithoutBookingItemInput {

    @Field(() => [BookingCreateWithoutBookingItemInput], {nullable:true})
    create?: Array<BookingCreateWithoutBookingItemInput>;

    @Field(() => [BookingCreateOrConnectWithoutBookingItemInput], {nullable:true})
    connectOrCreate?: Array<BookingCreateOrConnectWithoutBookingItemInput>;

    @Field(() => BookingCreateManyBookingItemInputEnvelope, {nullable:true})
    createMany?: BookingCreateManyBookingItemInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    connect?: Array<BookingWhereUniqueInput>;
}
