import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { PromotionCreateWithoutBookingInput } from './promotion-create-without-booking.input';

@InputType()
export class PromotionCreateOrConnectWithoutBookingInput {

    @Field(() => PromotionWhereUniqueInput, {nullable:false})
    where!: PromotionWhereUniqueInput;

    @Field(() => PromotionCreateWithoutBookingInput, {nullable:false})
    create!: PromotionCreateWithoutBookingInput;
}
