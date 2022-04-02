import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionCreateWithoutBookingInput } from './promotion-create-without-booking.input';
import { PromotionCreateOrConnectWithoutBookingInput } from './promotion-create-or-connect-without-booking.input';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';

@InputType()
export class PromotionCreateNestedOneWithoutBookingInput {

    @Field(() => PromotionCreateWithoutBookingInput, {nullable:true})
    create?: PromotionCreateWithoutBookingInput;

    @Field(() => PromotionCreateOrConnectWithoutBookingInput, {nullable:true})
    connectOrCreate?: PromotionCreateOrConnectWithoutBookingInput;

    @Field(() => PromotionWhereUniqueInput, {nullable:true})
    connect?: PromotionWhereUniqueInput;
}
