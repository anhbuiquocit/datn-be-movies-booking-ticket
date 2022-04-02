import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutUserInput } from './order-create-without-user.input';
import { OrderCreateOrConnectWithoutUserInput } from './order-create-or-connect-without-user.input';
import { OrderCreateManyUserInputEnvelope } from './order-create-many-user-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    create?: Array<OrderCreateWithoutUserInput>;

    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;

    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyUserInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}
