import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutBookingInput } from './user-create-without-booking.input';

@InputType()
export class UserCreateOrConnectWithoutBookingInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutBookingInput, {nullable:false})
    create!: UserCreateWithoutBookingInput;
}
