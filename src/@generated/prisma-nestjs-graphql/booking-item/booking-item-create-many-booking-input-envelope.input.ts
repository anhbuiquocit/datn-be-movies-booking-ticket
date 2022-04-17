import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateManyBookingInput } from './booking-item-create-many-booking.input';

@InputType()
export class BookingItemCreateManyBookingInputEnvelope {

    @Field(() => [BookingItemCreateManyBookingInput], {nullable:false})
    data!: Array<BookingItemCreateManyBookingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
