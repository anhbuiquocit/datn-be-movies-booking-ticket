import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingUpdateWithoutBookingInput } from './showing-update-without-booking.input';
import { ShowingCreateWithoutBookingInput } from './showing-create-without-booking.input';

@InputType()
export class ShowingUpsertWithoutBookingInput {

    @Field(() => ShowingUpdateWithoutBookingInput, {nullable:false})
    update!: ShowingUpdateWithoutBookingInput;

    @Field(() => ShowingCreateWithoutBookingInput, {nullable:false})
    create!: ShowingCreateWithoutBookingInput;
}
