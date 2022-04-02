import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutShowingInput } from './booking-update-without-showing.input';

@InputType()
export class BookingUpdateWithWhereUniqueWithoutShowingInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutShowingInput, {nullable:false})
    data!: BookingUpdateWithoutShowingInput;
}
