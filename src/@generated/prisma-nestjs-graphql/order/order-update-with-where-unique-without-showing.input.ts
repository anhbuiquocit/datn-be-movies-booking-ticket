import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutShowingInput } from './order-update-without-showing.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutShowingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutShowingInput, {nullable:false})
    data!: OrderUpdateWithoutShowingInput;
}
