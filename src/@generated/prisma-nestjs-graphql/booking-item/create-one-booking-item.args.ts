import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemCreateInput } from './booking-item-create.input';

@ArgsType()
export class CreateOneBookingItemArgs {

    @Field(() => BookingItemCreateInput, {nullable:false})
    data!: BookingItemCreateInput;
}
