import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutUserInput } from './booking-update-without-user.input';

@InputType()
export class BookingUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutUserInput, {nullable:false})
    data!: BookingUpdateWithoutUserInput;
}
