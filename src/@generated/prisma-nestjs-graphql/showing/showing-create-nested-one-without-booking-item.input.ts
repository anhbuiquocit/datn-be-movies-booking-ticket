import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingCreateWithoutBookingItemInput } from './showing-create-without-booking-item.input';
import { ShowingCreateOrConnectWithoutBookingItemInput } from './showing-create-or-connect-without-booking-item.input';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';

@InputType()
export class ShowingCreateNestedOneWithoutBookingItemInput {

    @Field(() => ShowingCreateWithoutBookingItemInput, {nullable:true})
    create?: ShowingCreateWithoutBookingItemInput;

    @Field(() => ShowingCreateOrConnectWithoutBookingItemInput, {nullable:true})
    connectOrCreate?: ShowingCreateOrConnectWithoutBookingItemInput;

    @Field(() => ShowingWhereUniqueInput, {nullable:true})
    connect?: ShowingWhereUniqueInput;
}
