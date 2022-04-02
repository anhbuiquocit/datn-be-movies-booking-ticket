import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutShowingInput } from './booking-create-without-showing.input';
import { BookingCreateOrConnectWithoutShowingInput } from './booking-create-or-connect-without-showing.input';
import { BookingUpsertWithWhereUniqueWithoutShowingInput } from './booking-upsert-with-where-unique-without-showing.input';
import { BookingCreateManyShowingInputEnvelope } from './booking-create-many-showing-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutShowingInput } from './booking-update-with-where-unique-without-showing.input';
import { BookingUpdateManyWithWhereWithoutShowingInput } from './booking-update-many-with-where-without-showing.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUncheckedUpdateManyWithoutShowingInput {

    @Field(() => [BookingCreateWithoutShowingInput], {nullable:true})
    create?: Array<BookingCreateWithoutShowingInput>;

    @Field(() => [BookingCreateOrConnectWithoutShowingInput], {nullable:true})
    connectOrCreate?: Array<BookingCreateOrConnectWithoutShowingInput>;

    @Field(() => [BookingUpsertWithWhereUniqueWithoutShowingInput], {nullable:true})
    upsert?: Array<BookingUpsertWithWhereUniqueWithoutShowingInput>;

    @Field(() => BookingCreateManyShowingInputEnvelope, {nullable:true})
    createMany?: BookingCreateManyShowingInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    set?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    delete?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    connect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingUpdateWithWhereUniqueWithoutShowingInput], {nullable:true})
    update?: Array<BookingUpdateWithWhereUniqueWithoutShowingInput>;

    @Field(() => [BookingUpdateManyWithWhereWithoutShowingInput], {nullable:true})
    updateMany?: Array<BookingUpdateManyWithWhereWithoutShowingInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookingScalarWhereInput>;
}
