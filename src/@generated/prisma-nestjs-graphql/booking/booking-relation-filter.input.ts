import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingWhereInput } from './booking-where.input';

@InputType()
export class BookingRelationFilter {

    @Field(() => BookingWhereInput, {nullable:true})
    is?: BookingWhereInput;

    @Field(() => BookingWhereInput, {nullable:true})
    isNot?: BookingWhereInput;
}
