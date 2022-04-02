import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereInput } from './booking-item-where.input';

@InputType()
export class BookingItemListRelationFilter {

    @Field(() => BookingItemWhereInput, {nullable:true})
    every?: BookingItemWhereInput;

    @Field(() => BookingItemWhereInput, {nullable:true})
    some?: BookingItemWhereInput;

    @Field(() => BookingItemWhereInput, {nullable:true})
    none?: BookingItemWhereInput;
}
