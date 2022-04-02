import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingCreateManyBookingItemInput } from './booking-create-many-booking-item.input';

@InputType()
export class BookingCreateManyBookingItemInputEnvelope {

    @Field(() => [BookingCreateManyBookingItemInput], {nullable:false})
    data!: Array<BookingCreateManyBookingItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
