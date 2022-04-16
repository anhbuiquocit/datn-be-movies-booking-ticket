import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemUpdateWithoutShowingInput } from './booking-item-update-without-showing.input';
import { BookingItemCreateWithoutShowingInput } from './booking-item-create-without-showing.input';

@InputType()
export class BookingItemUpsertWithWhereUniqueWithoutShowingInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemUpdateWithoutShowingInput, {nullable:false})
    update!: BookingItemUpdateWithoutShowingInput;

    @Field(() => BookingItemCreateWithoutShowingInput, {nullable:false})
    create!: BookingItemCreateWithoutShowingInput;
}
