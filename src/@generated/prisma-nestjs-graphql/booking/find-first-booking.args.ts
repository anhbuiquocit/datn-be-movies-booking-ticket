import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingWhereInput } from './booking-where.input';
import { BookingOrderByWithRelationInput } from './booking-order-by-with-relation.input';
import { BookingWhereUniqueInput } from './booking-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BookingScalarFieldEnum } from './booking-scalar-field.enum';

@ArgsType()
export class FindFirstBookingArgs {

    @Field(() => BookingWhereInput, {nullable:true})
    where?: BookingWhereInput;

    @Field(() => [BookingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BookingOrderByWithRelationInput>;

    @Field(() => BookingWhereUniqueInput, {nullable:true})
    cursor?: BookingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BookingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BookingScalarFieldEnum>;
}
