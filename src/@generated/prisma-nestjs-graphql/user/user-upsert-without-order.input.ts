import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutOrderInput } from './user-update-without-order.input';
import { UserCreateWithoutOrderInput } from './user-create-without-order.input';

@InputType()
export class UserUpsertWithoutOrderInput {

    @Field(() => UserUpdateWithoutOrderInput, {nullable:false})
    update!: UserUpdateWithoutOrderInput;

    @Field(() => UserCreateWithoutOrderInput, {nullable:false})
    create!: UserCreateWithoutOrderInput;
}
