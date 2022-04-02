import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutShowingInput } from './order-create-without-showing.input';
import { OrderCreateOrConnectWithoutShowingInput } from './order-create-or-connect-without-showing.input';
import { OrderCreateManyShowingInputEnvelope } from './order-create-many-showing-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedManyWithoutShowingInput {

    @Field(() => [OrderCreateWithoutShowingInput], {nullable:true})
    create?: Array<OrderCreateWithoutShowingInput>;

    @Field(() => [OrderCreateOrConnectWithoutShowingInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutShowingInput>;

    @Field(() => OrderCreateManyShowingInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyShowingInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}
