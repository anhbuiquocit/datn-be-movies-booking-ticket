import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookingItemCreateManySeatInput } from './booking-item-create-many-seat.input';

@InputType()
export class BookingItemCreateManySeatInputEnvelope {

    @Field(() => [BookingItemCreateManySeatInput], {nullable:false})
    data!: Array<BookingItemCreateManySeatInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
