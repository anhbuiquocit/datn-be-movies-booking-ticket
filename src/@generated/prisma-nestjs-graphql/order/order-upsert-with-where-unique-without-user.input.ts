import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutUserInput } from './order-update-without-user.input';
import { OrderCreateWithoutUserInput } from './order-create-without-user.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutUserInput, {nullable:false})
    update!: OrderUpdateWithoutUserInput;

    @Field(() => OrderCreateWithoutUserInput, {nullable:false})
    create!: OrderCreateWithoutUserInput;
}
