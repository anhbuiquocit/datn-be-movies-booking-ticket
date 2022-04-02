import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionUpdateWithoutOrderInput } from './promotion-update-without-order.input';
import { PromotionCreateWithoutOrderInput } from './promotion-create-without-order.input';

@InputType()
export class PromotionUpsertWithoutOrderInput {

    @Field(() => PromotionUpdateWithoutOrderInput, {nullable:false})
    update!: PromotionUpdateWithoutOrderInput;

    @Field(() => PromotionCreateWithoutOrderInput, {nullable:false})
    create!: PromotionCreateWithoutOrderInput;
}
