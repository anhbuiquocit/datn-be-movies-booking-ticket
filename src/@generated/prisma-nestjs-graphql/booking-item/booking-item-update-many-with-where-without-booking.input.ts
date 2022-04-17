import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemScalarWhereInput } from './booking-item-scalar-where.input';
import { BookingItemUpdateManyMutationInput } from './booking-item-update-many-mutation.input';

@InputType()
export class BookingItemUpdateManyWithWhereWithoutBookingInput {

    @Field(() => BookingItemScalarWhereInput, {nullable:false})
    where!: BookingItemScalarWhereInput;

    @Field(() => BookingItemUpdateManyMutationInput, {nullable:false})
    data!: BookingItemUpdateManyMutationInput;
}
