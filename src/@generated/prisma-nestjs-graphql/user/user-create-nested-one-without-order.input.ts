import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrderInput } from './user-create-without-order.input';
import { UserCreateOrConnectWithoutOrderInput } from './user-create-or-connect-without-order.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutOrderInput {

    @Field(() => UserCreateWithoutOrderInput, {nullable:true})
    create?: UserCreateWithoutOrderInput;

    @Field(() => UserCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
