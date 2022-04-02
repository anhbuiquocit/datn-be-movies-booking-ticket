import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutUserInput } from './order-create-without-user.input';

@InputType()
export class OrderCreateOrConnectWithoutUserInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutUserInput, {nullable:false})
    create!: OrderCreateWithoutUserInput;
}
