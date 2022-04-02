import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemUpdateManyMutationInput } from './booking-item-update-many-mutation.input';
import { BookingItemWhereInput } from './booking-item-where.input';

@ArgsType()
export class UpdateManyBookingItemArgs {

    @Field(() => BookingItemUpdateManyMutationInput, {nullable:false})
    data!: BookingItemUpdateManyMutationInput;

    @Field(() => BookingItemWhereInput, {nullable:true})
    where?: BookingItemWhereInput;
}
