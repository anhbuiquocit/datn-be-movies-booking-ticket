import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBookingInput } from './user-create-without-booking.input';
import { UserCreateOrConnectWithoutBookingInput } from './user-create-or-connect-without-booking.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBookingInput {

    @Field(() => UserCreateWithoutBookingInput, {nullable:true})
    create?: UserCreateWithoutBookingInput;

    @Field(() => UserCreateOrConnectWithoutBookingInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
