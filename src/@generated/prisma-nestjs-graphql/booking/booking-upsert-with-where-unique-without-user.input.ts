import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingUpdateWithoutUserInput } from './booking-update-without-user.input';
import { BookingCreateWithoutUserInput } from './booking-create-without-user.input';

@InputType()
export class BookingUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingUpdateWithoutUserInput, {nullable:false})
    update!: BookingUpdateWithoutUserInput;

    @Field(() => BookingCreateWithoutUserInput, {nullable:false})
    create!: BookingCreateWithoutUserInput;
}
