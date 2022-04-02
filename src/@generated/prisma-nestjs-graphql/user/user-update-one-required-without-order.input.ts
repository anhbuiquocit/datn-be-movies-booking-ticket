import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutOrderInput } from './user-create-without-order.input';
import { UserCreateOrConnectWithoutOrderInput } from './user-create-or-connect-without-order.input';
import { UserUpsertWithoutOrderInput } from './user-upsert-without-order.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutOrderInput } from './user-update-without-order.input';

@InputType()
export class UserUpdateOneRequiredWithoutOrderInput {

    @Field(() => UserCreateWithoutOrderInput, {nullable:true})
    create?: UserCreateWithoutOrderInput;

    @Field(() => UserCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput;

    @Field(() => UserUpsertWithoutOrderInput, {nullable:true})
    upsert?: UserUpsertWithoutOrderInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutOrderInput, {nullable:true})
    update?: UserUpdateWithoutOrderInput;
}
