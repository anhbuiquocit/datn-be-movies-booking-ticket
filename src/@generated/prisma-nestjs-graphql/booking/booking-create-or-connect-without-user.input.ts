import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingCreateWithoutUserInput } from './booking-create-without-user.input';

@InputType()
export class BookingCreateOrConnectWithoutUserInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutUserInput, {nullable:false})
    create!: BookingCreateWithoutUserInput;
}
