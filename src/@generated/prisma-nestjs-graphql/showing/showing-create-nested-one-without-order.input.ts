import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutOrderInput } from './showing-create-without-order.input';
import { ShowingCreateOrConnectWithoutOrderInput } from './showing-create-or-connect-without-order.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';

@InputType()
export class ShowingCreateNestedOneWithoutOrderInput {

    @Field(() => ShowingCreateWithoutOrderInput, {nullable:true})
    create?: ShowingCreateWithoutOrderInput;

    @Field(() => ShowingCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: ShowingCreateOrConnectWithoutOrderInput;

    @Field(() => ShowingWhereUniqueInput, {nullable:true})
    connect?: ShowingWhereUniqueInput;
}
