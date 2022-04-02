import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutPromotionInput } from './booking-update-without-promotion.input';

@InputType()
export class BookingUpdateWithWhereUniqueWithoutPromotionInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutPromotionInput, {nullable:false})
    data!: BookingUpdateWithoutPromotionInput;
}
