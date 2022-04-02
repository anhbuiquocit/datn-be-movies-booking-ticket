import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutSeatInput } from './booking-item-create-without-seat.input';
import { BookingItemCreateOrConnectWithoutSeatInput } from './booking-item-create-or-connect-without-seat.input';
import { BookingItemUpsertWithWhereUniqueWithoutSeatInput } from './booking-item-upsert-with-where-unique-without-seat.input';
import { BookingItemCreateManySeatInputEnvelope } from './booking-item-create-many-seat-input-envelope.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithWhereUniqueWithoutSeatInput } from './booking-item-update-with-where-unique-without-seat.input';
import { BookingItemUpdateManyWithWhereWithoutSeatInput } from './booking-item-update-many-with-where-without-seat.input';
import { BookingItemScalarWhereInput } from './booking-item-scalar-where.input';

@InputType()
export class BookingItemUncheckedUpdateManyWithoutSeatInput {

    @Field(() => [BookingItemCreateWithoutSeatInput], {nullable:true})
    create?: Array<BookingItemCreateWithoutSeatInput>;

    @Field(() => [BookingItemCreateOrConnectWithoutSeatInput], {nullable:true})
    connectOrCreate?: Array<BookingItemCreateOrConnectWithoutSeatInput>;

    @Field(() => [BookingItemUpsertWithWhereUniqueWithoutSeatInput], {nullable:true})
    upsert?: Array<BookingItemUpsertWithWhereUniqueWithoutSeatInput>;

    @Field(() => BookingItemCreateManySeatInputEnvelope, {nullable:true})
    createMany?: BookingItemCreateManySeatInputEnvelope;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    set?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    delete?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    connect?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemUpdateWithWhereUniqueWithoutSeatInput], {nullable:true})
    update?: Array<BookingItemUpdateWithWhereUniqueWithoutSeatInput>;

    @Field(() => [BookingItemUpdateManyWithWhereWithoutSeatInput], {nullable:true})
    updateMany?: Array<BookingItemUpdateManyWithWhereWithoutSeatInput>;

    @Field(() => [BookingItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookingItemScalarWhereInput>;
}
