import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemCreateInput } from './booking-item-create.input';
import { BookingItemUpdateInput } from './booking-item-update.input';

@ArgsType()
export class UpsertOneBookingItemArgs {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemCreateInput, {nullable:false})
    create!: BookingItemCreateInput;

    @Field(() => BookingItemUpdateInput, {nullable:false})
    update!: BookingItemUpdateInput;
}
