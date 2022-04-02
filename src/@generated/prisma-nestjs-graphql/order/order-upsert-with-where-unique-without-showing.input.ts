import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutShowingInput } from './order-update-without-showing.input';
import { OrderCreateWithoutShowingInput } from './order-create-without-showing.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutShowingInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutShowingInput, {nullable:false})
    update!: OrderUpdateWithoutShowingInput;

    @Field(() => OrderCreateWithoutShowingInput, {nullable:false})
    create!: OrderCreateWithoutShowingInput;
}
