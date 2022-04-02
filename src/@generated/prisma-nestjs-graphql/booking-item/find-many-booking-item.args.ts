import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemWhereInput } from './booking-item-where.input';
import { BookingItemOrderByWithRelationInput } from './booking-item-order-by-with-relation.input';
import { BookingItemWhereUniqueInput } from './booking-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookingItemScalarFieldEnum } from './booking-item-scalar-field.enum';

@ArgsType()
export class FindManyBookingItemArgs {

    @Field(() => BookingItemWhereInput, {nullable:true})
    where?: BookingItemWhereInput;

    @Field(() => [BookingItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookingItemOrderByWithRelationInput>;

    @Field(() => BookingItemWhereUniqueInput, {nullable:true})
    cursor?: BookingItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BookingItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookingItemScalarFieldEnum>;
}
