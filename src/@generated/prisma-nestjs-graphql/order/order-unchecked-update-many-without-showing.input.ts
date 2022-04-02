import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutShowingInput } from './order-create-without-showing.input';
import { OrderCreateOrConnectWithoutShowingInput } from './order-create-or-connect-without-showing.input';
import { OrderUpsertWithWhereUniqueWithoutShowingInput } from './order-upsert-with-where-unique-without-showing.input';
import { OrderCreateManyShowingInputEnvelope } from './order-create-many-showing-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithWhereUniqueWithoutShowingInput } from './order-update-with-where-unique-without-showing.input';
import { OrderUpdateManyWithWhereWithoutShowingInput } from './order-update-many-with-where-without-showing.input';
import { OrderScalarWhereInput } from './order-scalar-where.input';

@InputType()
export class OrderUncheckedUpdateManyWithoutShowingInput {

    @Field(() => [OrderCreateWithoutShowingInput], {nullable:true})
    create?: Array<OrderCreateWithoutShowingInput>;

    @Field(() => [OrderCreateOrConnectWithoutShowingInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutShowingInput>;

    @Field(() => [OrderUpsertWithWhereUniqueWithoutShowingInput], {nullable:true})
    upsert?: Array<OrderUpsertWithWhereUniqueWithoutShowingInput>;

    @Field(() => OrderCreateManyShowingInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyShowingInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    set?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    delete?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;

    @Field(() => [OrderUpdateWithWhereUniqueWithoutShowingInput], {nullable:true})
    update?: Array<OrderUpdateWithWhereUniqueWithoutShowingInput>;

    @Field(() => [OrderUpdateManyWithWhereWithoutShowingInput], {nullable:true})
    updateMany?: Array<OrderUpdateManyWithWhereWithoutShowingInput>;

    @Field(() => [OrderScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderScalarWhereInput>;
}
