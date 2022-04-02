import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookingItemCreateManyInput } from './booking-item-create-many.input';

@ArgsType()
export class CreateManyBookingItemArgs {

    @Field(() => [BookingItemCreateManyInput], {nullable:false})
    data!: Array<BookingItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
