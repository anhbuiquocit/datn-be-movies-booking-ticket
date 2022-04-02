import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereInput } from './booking-where.input';

@InputType()
export class BookingListRelationFilter {

    @Field(() => BookingWhereInput, {nullable:true})
    every?: BookingWhereInput;

    @Field(() => BookingWhereInput, {nullable:true})
    some?: BookingWhereInput;

    @Field(() => BookingWhereInput, {nullable:true})
    none?: BookingWhereInput;
}
