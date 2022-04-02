import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingWhereInput } from './booking-where.input';

@ArgsType()
export class DeleteManyBookingArgs {

    @Field(() => BookingWhereInput, {nullable:true})
    where?: BookingWhereInput;
}
