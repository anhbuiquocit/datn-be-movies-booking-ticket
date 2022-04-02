import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutUserInput } from './order-update-without-user.input';

@InputType()
export class OrderUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutUserInput, {nullable:false})
    data!: OrderUpdateWithoutUserInput;
}
