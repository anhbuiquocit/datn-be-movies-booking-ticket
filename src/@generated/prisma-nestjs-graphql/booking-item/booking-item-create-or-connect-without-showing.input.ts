import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { BookingItemCreateWithoutShowingInput } from './booking-item-create-without-showing.input';

@InputType()
export class BookingItemCreateOrConnectWithoutShowingInput {

    @Field(() => BookingItemWhereUniqueInput, {nullable:false})
    where!: BookingItemWhereUniqueInput;

    @Field(() => BookingItemCreateWithoutShowingInput, {nullable:false})
    create!: BookingItemCreateWithoutShowingInput;
}
