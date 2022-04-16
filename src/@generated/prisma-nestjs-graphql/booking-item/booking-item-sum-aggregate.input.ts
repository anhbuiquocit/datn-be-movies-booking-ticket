import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookingItemSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    price?: true;
}
