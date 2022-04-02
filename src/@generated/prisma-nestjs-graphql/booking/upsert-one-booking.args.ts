import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingCreateInput } from './booking-create.input';
import { BookingUpdateInput } from './booking-update.input';

@ArgsType()
export class UpsertOneBookingArgs {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateInput, {nullable:false})
    create!: BookingCreateInput;

    @Field(() => BookingUpdateInput, {nullable:false})
    update!: BookingUpdateInput;
}
