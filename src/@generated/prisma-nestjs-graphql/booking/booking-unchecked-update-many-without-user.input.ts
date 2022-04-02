import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutUserInput } from './booking-create-without-user.input';
import { BookingCreateOrConnectWithoutUserInput } from './booking-create-or-connect-without-user.input';
import { BookingUpsertWithWhereUniqueWithoutUserInput } from './booking-upsert-with-where-unique-without-user.input';
import { BookingCreateManyUserInputEnvelope } from './booking-create-many-user-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutUserInput } from './booking-update-with-where-unique-without-user.input';
import { BookingUpdateManyWithWhereWithoutUserInput } from './booking-update-many-with-where-without-user.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUncheckedUpdateManyWithoutUserInput {

    @Field(() => [BookingCreateWithoutUserInput], {nullable:true})
    create?: Array<BookingCreateWithoutUserInput>;

    @Field(() => [BookingCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<BookingCreateOrConnectWithoutUserInput>;

    @Field(() => [BookingUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<BookingUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => BookingCreateManyUserInputEnvelope, {nullable:true})
    createMany?: BookingCreateManyUserInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    set?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    delete?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    connect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<BookingUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [BookingUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<BookingUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookingScalarWhereInput>;
}
