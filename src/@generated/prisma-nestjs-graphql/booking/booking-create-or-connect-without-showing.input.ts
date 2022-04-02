import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { BookingCreateWithoutShowingInput } from './booking-create-without-showing.input';

@InputType()
export class BookingCreateOrConnectWithoutShowingInput {

    @Field(() => BookingWhereUniqueInput, {nullable:false})
    where!: BookingWhereUniqueInput;

    @Field(() => BookingCreateWithoutShowingInput, {nullable:false})
    create!: BookingCreateWithoutShowingInput;
}
