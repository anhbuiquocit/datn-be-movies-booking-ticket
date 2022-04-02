import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutBookingInput } from './showing-create-without-booking.input';
import { ShowingCreateOrConnectWithoutBookingInput } from './showing-create-or-connect-without-booking.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';

@InputType()
export class ShowingCreateNestedOneWithoutBookingInput {

    @Field(() => ShowingCreateWithoutBookingInput, {nullable:true})
    create?: ShowingCreateWithoutBookingInput;

    @Field(() => ShowingCreateOrConnectWithoutBookingInput, {nullable:true})
    connectOrCreate?: ShowingCreateOrConnectWithoutBookingInput;

    @Field(() => ShowingWhereUniqueInput, {nullable:true})
    connect?: ShowingWhereUniqueInput;
}
