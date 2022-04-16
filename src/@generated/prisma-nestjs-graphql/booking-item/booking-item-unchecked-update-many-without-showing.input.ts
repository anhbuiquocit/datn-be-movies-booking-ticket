import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateWithoutShowingInput } from './booking-item-create-without-showing.input';
import { BookingItemCreateOrConnectWithoutShowingInput } from './booking-item-create-or-connect-without-showing.input';
import { BookingItemUpsertWithWhereUniqueWithoutShowingInput } from './booking-item-upsert-with-where-unique-without-showing.input';
import { BookingItemCreateManyShowingInputEnvelope } from './booking-item-create-many-showing-input-envelope.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithWhereUniqueWithoutShowingInput } from './booking-item-update-with-where-unique-without-showing.input';
import { BookingItemUpdateManyWithWhereWithoutShowingInput } from './booking-item-update-many-with-where-without-showing.input';
import { BookingItemScalarWhereInput } from './booking-item-scalar-where.input';

@InputType()
export class BookingItemUncheckedUpdateManyWithoutShowingInput {

    @Field(() => [BookingItemCreateWithoutShowingInput], {nullable:true})
    create?: Array<BookingItemCreateWithoutShowingInput>;

    @Field(() => [BookingItemCreateOrConnectWithoutShowingInput], {nullable:true})
    connectOrCreate?: Array<BookingItemCreateOrConnectWithoutShowingInput>;

    @Field(() => [BookingItemUpsertWithWhereUniqueWithoutShowingInput], {nullable:true})
    upsert?: Array<BookingItemUpsertWithWhereUniqueWithoutShowingInput>;

    @Field(() => BookingItemCreateManyShowingInputEnvelope, {nullable:true})
    createMany?: BookingItemCreateManyShowingInputEnvelope;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    set?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    delete?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemWhereUniqueInput], {nullable:true})
    connect?: Array<BookingItemWhereUniqueInput>;

    @Field(() => [BookingItemUpdateWithWhereUniqueWithoutShowingInput], {nullable:true})
    update?: Array<BookingItemUpdateWithWhereUniqueWithoutShowingInput>;

    @Field(() => [BookingItemUpdateManyWithWhereWithoutShowingInput], {nullable:true})
    updateMany?: Array<BookingItemUpdateManyWithWhereWithoutShowingInput>;

    @Field(() => [BookingItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookingItemScalarWhereInput>;
}
