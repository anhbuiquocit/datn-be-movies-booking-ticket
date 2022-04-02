import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionCreateWithoutBookingInput } from './promotion-create-without-booking.input';
import { PromotionCreateOrConnectWithoutBookingInput } from './promotion-create-or-connect-without-booking.input';
import { PromotionUpsertWithoutBookingInput } from './promotion-upsert-without-booking.input';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { PromotionUpdateWithoutBookingInput } from './promotion-update-without-booking.input';

@InputType()
export class PromotionUpdateOneRequiredWithoutBookingInput {

    @Field(() => PromotionCreateWithoutBookingInput, {nullable:true})
    create?: PromotionCreateWithoutBookingInput;

    @Field(() => PromotionCreateOrConnectWithoutBookingInput, {nullable:true})
    connectOrCreate?: PromotionCreateOrConnectWithoutBookingInput;

    @Field(() => PromotionUpsertWithoutBookingInput, {nullable:true})
    upsert?: PromotionUpsertWithoutBookingInput;

    @Field(() => PromotionWhereUniqueInput, {nullable:true})
    connect?: PromotionWhereUniqueInput;

    @Field(() => PromotionUpdateWithoutBookingInput, {nullable:true})
    update?: PromotionUpdateWithoutBookingInput;
}
