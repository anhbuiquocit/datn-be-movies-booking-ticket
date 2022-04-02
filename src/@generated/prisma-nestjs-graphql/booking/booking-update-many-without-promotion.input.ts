import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutPromotionInput } from './booking-create-without-promotion.input';
import { BookingCreateOrConnectWithoutPromotionInput } from './booking-create-or-connect-without-promotion.input';
import { BookingUpsertWithWhereUniqueWithoutPromotionInput } from './booking-upsert-with-where-unique-without-promotion.input';
import { BookingCreateManyPromotionInputEnvelope } from './booking-create-many-promotion-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithWhereUniqueWithoutPromotionInput } from './booking-update-with-where-unique-without-promotion.input';
import { BookingUpdateManyWithWhereWithoutPromotionInput } from './booking-update-many-with-where-without-promotion.input';
import { BookingScalarWhereInput } from './booking-scalar-where.input';

@InputType()
export class BookingUpdateManyWithoutPromotionInput {

    @Field(() => [BookingCreateWithoutPromotionInput], {nullable:true})
    create?: Array<BookingCreateWithoutPromotionInput>;

    @Field(() => [BookingCreateOrConnectWithoutPromotionInput], {nullable:true})
    connectOrCreate?: Array<BookingCreateOrConnectWithoutPromotionInput>;

    @Field(() => [BookingUpsertWithWhereUniqueWithoutPromotionInput], {nullable:true})
    upsert?: Array<BookingUpsertWithWhereUniqueWithoutPromotionInput>;

    @Field(() => BookingCreateManyPromotionInputEnvelope, {nullable:true})
    createMany?: BookingCreateManyPromotionInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    set?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    disconnect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    delete?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    connect?: Array<BookingWhereUniqueInput>;

    @Field(() => [BookingUpdateWithWhereUniqueWithoutPromotionInput], {nullable:true})
    update?: Array<BookingUpdateWithWhereUniqueWithoutPromotionInput>;

    @Field(() => [BookingUpdateManyWithWhereWithoutPromotionInput], {nullable:true})
    updateMany?: Array<BookingUpdateManyWithWhereWithoutPromotionInput>;

    @Field(() => [BookingScalarWhereInput], {nullable:true})
    deleteMany?: Array<BookingScalarWhereInput>;
}
