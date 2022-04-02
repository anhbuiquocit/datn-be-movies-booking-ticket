import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingCreateWithoutPromotionInput } from './booking-create-without-promotion.input';

@InputType()
export class BookingCreateOrConnectWithoutPromotionInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutPromotionInput, {nullable:false})
    create!: BookingCreateWithoutPromotionInput;
}
