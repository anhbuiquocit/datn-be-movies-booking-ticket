import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBookingInput } from './user-update-without-booking.input';
import { UserCreateWithoutBookingInput } from './user-create-without-booking.input';

@InputType()
export class UserUpsertWithoutBookingInput {

    @Field(() => UserUpdateWithoutBookingInput, {nullable:false})
    update!: UserUpdateWithoutBookingInput;

    @Field(() => UserCreateWithoutBookingInput, {nullable:false})
    create!: UserCreateWithoutBookingInput;
}
