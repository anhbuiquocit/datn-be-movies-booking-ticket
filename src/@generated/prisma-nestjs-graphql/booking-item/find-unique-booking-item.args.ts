import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';

@ArgsType()
export class FindUniqueBookingItemArgs {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;
}
