import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithoutShowingInput } from './booking-item-update-without-showing.input';

@InputType()
export class BookingItemUpdateWithWhereUniqueWithoutShowingInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemUpdateWithoutShowingInput, {nullable:false})
    data!: BookingItemUpdateWithoutShowingInput;
}
