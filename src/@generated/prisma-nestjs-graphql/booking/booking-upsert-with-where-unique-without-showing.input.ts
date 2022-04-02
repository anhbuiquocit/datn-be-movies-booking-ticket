import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutShowingInput } from './booking-update-without-showing.input';
import { BookingCreateWithoutShowingInput } from './booking-create-without-showing.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutShowingInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutShowingInput, {nullable:false})
    update!: BookingUpdateWithoutShowingInput;

    @Field(() => BookingCreateWithoutShowingInput, {nullable:false})
    create!: BookingCreateWithoutShowingInput;
}
