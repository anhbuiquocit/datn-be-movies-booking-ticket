import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutBookingItemInput } from './booking-create-without-booking-item.input';
import { BookingCreateOrConnectWithoutBookingItemInput } from './booking-create-or-connect-without-booking-item.input';
import { BookingUpsertWithWhereUniqueWithoutBookingItemInput } from './booking-upsert-with-where-unique-without-booking-item.input';
import { BookingCreateManyBookingItemInputEnvelope } from './booking-create-many-booking-item-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutBookingItemInput } from './booking-update-with-where-unique-without-booking-item.input';
import { BookingUpdateManyWithWhereWithoutBookingItemInput } from './booking-update-many-with-where-without-booking-item.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUncheckedUpdateManyWithoutBookingItemInput {

    @Field(() => [BookingCreateWithoutBookingItemInput], {nullable:true})
    create?: Array<BookingCreateWithoutBookingItemInput>;

    @Field(() => [BookingCreateOrConnectWithoutBookingItemInput], {nullable:true})
    connectOrCreate?: Array<BookingCreateOrConnectWithoutBookingItemInput>;

    @Field(() => [BookingUpsertWithWhereUniqueWithoutBookingItemInput], {nullable:true})
    upsert?: Array<BookingUpsertWithWhereUniqueWithoutBookingItemInput>;

    @Field(() => BookingCreateManyBookingItemInputEnvelope, {nullable:true})
    createMany?: BookingCreateManyBookingItemInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    set?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    delete?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    connect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingUpdateWithWhereUniqueWithoutBookingItemInput], {nullable:true})
    update?: Array<BookingUpdateWithWhereUniqueWithoutBookingItemInput>;

    @Field(() => [BookingUpdateManyWithWhereWithoutBookingItemInput], {nullable:true})
    updateMany?: Array<BookingUpdateManyWithWhereWithoutBookingItemInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookingScalarWhereInput>;
}
