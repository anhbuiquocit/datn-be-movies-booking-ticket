import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemWhereInput } from './booking-item-where.input';

@InputType()
export class BookingItemRelationFilter {

    @Field(() => BookingItemWhereInput, {nullable:true})
    is?: BookingItemWhereInput;

    @Field(() => BookingItemWhereInput, {nullable:true})
    isNot?: BookingItemWhereInput;
}
