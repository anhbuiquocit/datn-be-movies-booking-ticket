import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingUpdateManyMutationInput } from './booking-update-many-mutation.input';
import { BookingWhereInput } from './booking-where.input';

@ArgsType()
export class UpdateManyBookingArgs {

    @Field(() => BookingUpdateManyMutationInput, {nullable:false})
    data!: BookingUpdateManyMutationInput;

    @Field(() => BookingWhereInput, {nullable:true})
    where?: BookingWhereInput;
}
