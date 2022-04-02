import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutUserInput } from './order-create-without-user.input';
import { OrderCreateOrConnectWithoutUserInput } from './order-create-or-connect-without-user.input';
import { OrderUpsertWithWhereUniqueWithoutUserInput } from './order-upsert-with-where-unique-without-user.input';
import { OrderCreateManyUserInputEnvelope } from './order-create-many-user-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutUserInput } from './order-update-with-where-unique-without-user.input';
import { OrderUpdateManyWithWhereWithoutUserInput } from './order-update-many-with-where-without-user.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUpdateManyWithoutUserInput {

    @Field(() => [OrderCreateWithoutUserInput], {nullable:true})
    create?: Array<OrderCreateWithoutUserInput>;

    @Field(() => [OrderCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutUserInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => OrderCreateManyUserInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyUserInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
