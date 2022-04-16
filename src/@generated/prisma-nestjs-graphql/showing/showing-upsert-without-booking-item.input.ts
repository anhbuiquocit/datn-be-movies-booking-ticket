import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShowingUpdateWithoutBookingItemInput } from './showing-update-without-booking-item.input';
import { ShowingCreateWithoutBookingItemInput } from './showing-create-without-booking-item.input';

@InputType()
export class ShowingUpsertWithoutBookingItemInput {

    @Field(() => ShowingUpdateWithoutBookingItemInput, {nullable:false})
    update!: ShowingUpdateWithoutBookingItemInput;

    @Field(() => ShowingCreateWithoutBookingItemInput, {nullable:false})
    create!: ShowingCreateWithoutBookingItemInput;
}
