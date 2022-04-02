import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingCreateWithoutBookingInput } from './showing-create-without-booking.input';

@InputType()
export class ShowingCreateOrConnectWithoutBookingInput {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingCreateWithoutBookingInput, {nullable:false})
    create!: ShowingCreateWithoutBookingInput;
}
