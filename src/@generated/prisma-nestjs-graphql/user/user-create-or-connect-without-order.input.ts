import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutOrderInput } from './user-create-without-order.input';

@InputType()
export class UserCreateOrConnectWithoutOrderInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutOrderInput, {nullable:false})
    create!: UserCreateWithoutOrderInput;
}
