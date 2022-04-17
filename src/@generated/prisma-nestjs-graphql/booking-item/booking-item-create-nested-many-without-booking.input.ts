import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutBookingInput } from './booking-item-create-without-booking.input';
import { BookingItemCreateOrConnectWithoutBookingInput } from './booking-item-create-or-connect-without-booking.input';
import { BookingItemCreateManyBookingInputEnvelope } from './booking-item-create-many-booking-input-envelope.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';

@InputType()
export class BookingItemCreateNestedManyWithoutBookingInput {

    @Field(() => [BookingItemCreateWithoutBookingInput], {nullable:true})
    create?: Array<BookingItemCreateWithoutBookingInput>;

    @Field(() => [BookingItemCreateOrConnectWithoutBookingInput], {nullable:true})
    connectOrCreate?: Array<BookingItemCreateOrConnectWithoutBookingInput>;

    @Field(() => BookingItemCreateManyBookingInputEnvelope, {nullable:true})
    createMany?: BookingItemCreateManyBookingInputEnvelope;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    connect?: Array<BookingItemWhereUniqueInput>;
}
