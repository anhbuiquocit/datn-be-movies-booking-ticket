import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutPromotionInput } from './booking-update-without-promotion.input';
import { BookingCreateWithoutPromotionInput } from './booking-create-without-promotion.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutPromotionInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutPromotionInput, {nullable:false})
    update!: BookingUpdateWithoutPromotionInput;

    @Field(() => BookingCreateWithoutPromotionInput, {nullable:false})
    create!: BookingCreateWithoutPromotionInput;
}
