import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutSeatInput } from './booking-item-create-without-seat.input';
import { BookingItemCreateOrConnectWithoutSeatInput } from './booking-item-create-or-connect-without-seat.input';
import { BookingItemCreateManySeatInputEnvelope } from './booking-item-create-many-seat-input-envelope.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';

@InputType()
export class BookingItemUncheckedCreateNestedManyWithoutSeatInput {

    @Field(() => [BookingItemCreateWithoutSeatInput], {nullable:true})
    create?: Array<BookingItemCreateWithoutSeatInput>;

    @Field(() => [BookingItemCreateOrConnectWithoutSeatInput], {nullable:true})
    connectOrCreate?: Array<BookingItemCreateOrConnectWithoutSeatInput>;

    @Field(() => BookingItemCreateManySeatInputEnvelope, {nullable:true})
    createMany?: BookingItemCreateManySeatInputEnvelope;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    connect?: Array<BookingItemWhereUniqueInput>;
}
