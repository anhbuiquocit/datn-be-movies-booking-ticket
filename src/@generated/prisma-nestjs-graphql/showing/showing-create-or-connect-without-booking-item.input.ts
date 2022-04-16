import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingWhereUniqueInput } from './showing-where-unique.input';
import { ShowingCreateWithoutBookingItemInput } from './showing-create-without-booking-item.input';

@InputType()
export class ShowingCreateOrConnectWithoutBookingItemInput {

    @Field(() => ShowingWhereUniqueInput, {nullable:false})
    where!: ShowingWhereUniqueInput;

    @Field(() => ShowingCreateWithoutBookingItemInput, {nullable:false})
    create!: ShowingCreateWithoutBookingItemInput;
}
