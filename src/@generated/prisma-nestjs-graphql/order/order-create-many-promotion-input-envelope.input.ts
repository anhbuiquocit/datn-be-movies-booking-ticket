import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyPromotionInput } from './order-create-many-promotion.input';

@InputType()
export class OrderCreateManyPromotionInputEnvelope {

    @Field(() => [OrderCreateManyPromotionInput], {nullable:false})
    data!: Array<OrderCreateManyPromotionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
