import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateWithoutPromotionInput } from './booking-create-without-promotion.input';
import { BookingCreateOrConnectWithoutPromotionInput } from './booking-create-or-connect-without-promotion.input';
import { BookingCreateManyPromotionInputEnvelope } from './booking-create-many-promotion-input-envelope.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@InputType()
export class BookingUncheckedCreateNestedManyWithoutPromotionInput {

    @Field(() => [BookingCreateWithoutPromotionInput], {nullable:true})
    create?: Array<BookingCreateWithoutPromotionInput>;

    @Field(() => [BookingCreateOrConnectWithoutPromotionInput], {nullable:true})
    connectOrCreate?: Array<BookingCreateOrConnectWithoutPromotionInput>;

    @Field(() => BookingCreateManyPromotionInputEnvelope, {nullable:true})
    createMany?: BookingCreateManyPromotionInputEnvelope;

    @Field(() => [BookingWhereUniqueInput], {nullable:true})
    connect?: Array<BookingWhereUniqueInput>;
}
