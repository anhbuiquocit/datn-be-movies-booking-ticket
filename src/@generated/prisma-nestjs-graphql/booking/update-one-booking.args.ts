import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingUpdateInput } from './booking-update.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@ArgsType()
export class UpdateOneBookingArgs {

    @Field(() => BookingUpdateInput, {nullable:false})
    data!: BookingUpdateInput;

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;
}
