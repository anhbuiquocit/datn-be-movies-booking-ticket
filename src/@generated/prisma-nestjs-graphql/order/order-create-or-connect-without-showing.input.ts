import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutShowingInput } from './order-create-without-showing.input';

@InputType()
export class OrderCreateOrConnectWithoutShowingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutShowingInput, {nullable:false})
    create!: OrderCreateWithoutShowingInput;
}
