import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBookingInput } from './user-create-without-booking.input';
import { UserCreateOrConnectWithoutBookingInput } from './user-create-or-connect-without-booking.input';
import { UserUpsertWithoutBookingInput } from './user-upsert-without-booking.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutBookingInput } from './user-update-without-booking.input';

@InputType()
export class UserUpdateOneRequiredWithoutBookingInput {

    @Field(() => UserCreateWithoutBookingInput, {nullable:true})
    create?: UserCreateWithoutBookingInput;

    @Field(() => UserCreateOrConnectWithoutBookingInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput;

    @Field(() => UserUpsertWithoutBookingInput, {nullable:true})
    upsert?: UserUpsertWithoutBookingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutBookingInput, {nullable:true})
    update?: UserUpdateWithoutBookingInput;
}
