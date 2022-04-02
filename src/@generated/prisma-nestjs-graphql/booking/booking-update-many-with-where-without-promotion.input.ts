import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingScalarWhereInput } from './booking-scalar-where.input';
import { BookingUpdateManyMutationInput } from './booking-update-many-mutation.input';

@InputType()
export class BookingUpdateManyWithWhereWithoutPromotionInput {

    @Field(() => BookingScalarWhereInput, {nullable:false})
    where!: BookingScalarWhereInput;

    @Field(() => BookingUpdateManyMutationInput, {nullable:false})
    data!: BookingUpdateManyMutationInput;
}
