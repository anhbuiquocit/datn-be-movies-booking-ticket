import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionUpdateWithoutBookingInput } from './promotion-update-without-booking.input';
import { PromotionCreateWithoutBookingInput } from './promotion-create-without-booking.input';

@InputType()
export class PromotionUpsertWithoutBookingInput {

    @Field(() => PromotionUpdateWithoutBookingInput, {nullable:false})
    update!: PromotionUpdateWithoutBookingInput;

    @Field(() => PromotionCreateWithoutBookingInput, {nullable:false})
    create!: PromotionCreateWithoutBookingInput;
}
