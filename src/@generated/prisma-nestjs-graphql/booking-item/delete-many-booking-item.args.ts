import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemWhereInput } from './booking-item-where.input';

@ArgsType()
export class DeleteManyBookingItemArgs {

    @Field(() => BookingItemWhereInput, {nullable:true})
    where?: BookingItemWhereInput;
}
