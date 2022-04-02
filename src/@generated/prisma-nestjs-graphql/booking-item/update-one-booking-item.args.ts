import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemUpdateInput } from './booking-item-update.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';

@ArgsType()
export class UpdateOneBookingItemArgs {

    @Field(() => BookingItemUpdateInput, {nullable:false})
    data!: BookingItemUpdateInput;

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;
}
