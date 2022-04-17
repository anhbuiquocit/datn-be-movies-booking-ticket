import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutBookingInput } from './booking-item-create-without-booking.input';
import { BookingItemCreateOrConnectWithoutBookingInput } from './booking-item-create-or-connect-without-booking.input';
import { BookingItemUpsertWithWhereUniqueWithoutBookingInput } from './booking-item-upsert-with-where-unique-without-booking.input';
import { BookingItemCreateManyBookingInputEnvelope } from './booking-item-create-many-booking-input-envelope.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithWhereUniqueWithoutBookingInput } from './booking-item-update-with-where-unique-without-booking.input';
import { BookingItemUpdateManyWithWhereWithoutBookingInput } from './booking-item-update-many-with-where-without-booking.input';
import { BookingItemScalarWhereInput } from './booking-item-scalar-where.input';

@InputType()
export class BookingItemUpdateManyWithoutBookingInput {

    @Field(() => [BookingItemCreateWithoutBookingInput], {nullable:true})
    create?: Array<BookingItemCreateWithoutBookingInput>;

    @Field(() => [BookingItemCreateOrConnectWithoutBookingInput], {nullable:true})
    connectOrCreate?: Array<BookingItemCreateOrConnectWithoutBookingInput>;

    @Field(() => [BookingItemUpsertWithWhereUniqueWithoutBookingInput], {nullable:true})
    upsert?: Array<BookingItemUpsertWithWhereUniqueWithoutBookingInput>;

    @Field(() => BookingItemCreateManyBookingInputEnvelope, {nullable:true})
    createMany?: BookingItemCreateManyBookingInputEnvelope;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    set?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    delete?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    connect?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemUpdateWithWhereUniqueWithoutBookingInput], {nullable:true})
    update?: Array<BookingItemUpdateWithWhereUniqueWithoutBookingInput>;

    @Field(() => [BookingItemUpdateManyWithWhereWithoutBookingInput], {nullable:true})
    updateMany?: Array<BookingItemUpdateManyWithWhereWithoutBookingInput>;

    @Field(() => [BookingItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookingItemScalarWhereInput>;
}
