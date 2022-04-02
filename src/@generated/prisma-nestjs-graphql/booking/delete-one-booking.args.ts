import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';

@ArgsType()
export class DeleteOneBookingArgs {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;
}
