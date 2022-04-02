import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingCreateInput } from './booking-create.input';

@ArgsType()
export class CreateOneBookingArgs {

    @Field(() => BookingCreateInput, {nullable:false})
    data!: BookingCreateInput;
}
